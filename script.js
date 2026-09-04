const CENTERS = [
  {id:'c1', name:'Rampur Mandi Center', dist:'2.1 km away', cap:4},
  {id:'c2', name:'Sultanpur Procurement Yard', dist:'5.4 km away', cap:4},
  {id:'c3', name:'Govindpur Collection Point', dist:'7.8 km away', cap:3},
  {id:'c4', name:'Khera Buyback Center', dist:'9.2 km away', cap:3},
];
const SLOTS = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM'];

// shared in-memory state
let bookings = [
  {token:'RM-014', center:'c1', slot:'8:00 AM', name:'Suresh Yadav', phone:'98xxxxxx21', status:'progress'},
  {token:'RM-015', center:'c1', slot:'8:00 AM', name:'Kamla Devi', phone:'98xxxxxx77', status:'waiting'},
  {token:'SP-008', center:'c2', slot:'9:00 AM', name:'Mahesh Kumar', phone:'97xxxxxx03', status:'done'},
  {token:'SP-009', center:'c2', slot:'9:00 AM', name:'Rajendra Singh', phone:'97xxxxxx45', status:'waiting'},
];
let logs = [
  {msg:'Your token RM-015 is 2nd in line at Rampur Mandi Center. Est. wait: 20 min.', ch:'SMS', time:'07:52 AM'},
  {msg:'Token SP-008 marked Completed at Sultanpur Procurement Yard. Thank you!', ch:'WhatsApp', time:'08:41 AM'},
];
let tokenCounter = 16;

// booking flow state
let flow = {step:1, center:null, slot:null, name:'', phone:'', confirmedToken:null};
let currentFilter = 'all';

function render(view){
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  const main = document.getElementById('main');
  if(view==='booking') main.innerHTML = bookingView();
  if(view==='dashboard') main.innerHTML = dashboardView(currentFilter);
  if(view==='log') main.innerHTML = logView();
  attachHandlers(view);
}

/* ---------- BOOKING ---------- */
function bookingView(){
  const stepLabel = ['Choose center','Pick a slot','Confirm details'];
  const steps = stepLabel.map((l,i)=>{
    const n=i+1;
    const cls = n<flow.step ? 'done' : n===flow.step ? 'current' : '';
    return `<div class="step ${cls}"><span class="num">${n}.</span>${l}</div>`;
  }).join('');

  let body = '';
  if(flow.confirmedToken){
    const b = flow.confirmedToken;
    const center = CENTERS.find(c=>c.id===b.center);
    body = `
      <div class="token-card">
        <p>Your booking is confirmed</p>
        <div class="token-num">${b.token}</div>
        <p>Show this token number at the center gate</p>
        <div class="token-meta">
          <div><strong>${center.name}</strong><span>Center</span></div>
          <div><strong>${b.slot}</strong><span>Today</span></div>
          <div><strong>2 ahead</strong><span>In queue</span></div>
        </div>
      </div>
      <div class="row-end"><button class="btn btn-ghost" id="new-booking">Book another slot</button></div>
    `;
  } else if(flow.step===1){
    body = `
      <div class="card">
        <div class="center-grid">
          ${CENTERS.map(c=>`
            <div class="center-opt ${flow.center===c.id?'selected':''}" data-center="${c.id}">
              <strong>${c.name}</strong>
              <span>${c.dist} · ${c.cap} slots/hr</span>
            </div>`).join('')}
        </div>
        <div class="row-end"><button class="btn btn-primary" id="next1" ${!flow.center?'disabled':''}>Continue</button></div>
      </div>`;
  } else if(flow.step===2){
    const taken = ['9:00 AM','1:00 PM'];
    body = `
      <div class="card">
        <div class="slot-grid">
          ${SLOTS.map(s=>{
            const full = taken.includes(s);
            const sel = flow.slot===s;
            return `<div class="slot ${full?'full':''} ${sel?'selected':''}" data-slot="${full?'':s}">
              ${s}<small>${full?'Full':'Open'}</small></div>`;
          }).join('')}
        </div>
        <div class="row-end">
          <button class="btn btn-ghost" id="back2">Back</button>
          <button class="btn btn-primary" id="next2" ${!flow.slot?'disabled':''}>Continue</button>
        </div>
      </div>`;
  } else if(flow.step===3){
    body = `
      <div class="card">
        <label class="field-label">Full name</label>
        <input type="text" id="f-name" placeholder="As on your farmer ID" value="${flow.name}">
        <label class="field-label">Mobile number</label>
        <input type="tel" id="f-phone" placeholder="For SMS/WhatsApp alerts" value="${flow.phone}">
        <div class="row-end">
          <button class="btn btn-ghost" id="back3">Back</button>
          <button class="btn btn-primary" id="confirm3">Confirm booking</button>
        </div>
      </div>`;
  }

  return `
    <div class="page-head">
      <h2>Book a procurement slot</h2>
      <p>Pick your nearest center and an open time slot. You'll get a token number and SMS/WhatsApp updates on your queue position.</p>
    </div>
    ${flow.confirmedToken?'':`<div class="stepper">${steps}</div>`}
    ${body}
  `;
}

function attachBookingHandlers(){
  document.querySelectorAll('.center-opt').forEach(el=>{
    el.onclick=()=>{ flow.center=el.dataset.center; render('booking'); };
  });
  const n1=document.getElementById('next1'); if(n1) n1.onclick=()=>{ flow.step=2; render('booking'); };
  document.querySelectorAll('.slot').forEach(el=>{
    if(el.dataset.slot) el.onclick=()=>{ flow.slot=el.dataset.slot; render('booking'); };
  });
  const b2=document.getElementById('back2'); if(b2) b2.onclick=()=>{ flow.step=1; render('booking'); };
  const n2=document.getElementById('next2'); if(n2) n2.onclick=()=>{ flow.step=3; render('booking'); };
  const b3=document.getElementById('back3'); if(b3) b3.onclick=()=>{ flow.step=2; render('booking'); };
  const c3=document.getElementById('confirm3');
  if(c3) c3.onclick=()=>{
    flow.name = document.getElementById('f-name').value || 'Farmer';
    flow.phone = document.getElementById('f-phone').value || '—';
    const center = CENTERS.find(c=>c.id===flow.center);
    const prefix = center.name.split(' ')[0].slice(0,2).toUpperCase();
    const token = `${prefix}-0${tokenCounter++}`;
    const b = {token, center:flow.center, slot:flow.slot, name:flow.name, phone:flow.phone, status:'waiting'};
    bookings.push(b);
    logs.unshift({msg:`Booking confirmed: token ${token} at ${center.name}, ${flow.slot} today.`, ch:'SMS', time:nowStr()});
    flow.confirmedToken = b;
    render('booking');
  };
  const nb=document.getElementById('new-booking');
  if(nb) nb.onclick=()=>{ flow = {step:1, center:null, slot:null, name:'', phone:'', confirmedToken:null}; render('booking'); };
}

/* ---------- DASHBOARD ---------- */
function dashboardView(filter){
  const rows = bookings.filter(b=> filter==='all' || b.center===filter);
  const waiting = bookings.filter(b=>b.status==='waiting').length;
  const progress = bookings.filter(b=>b.status==='progress').length;
  const done = bookings.filter(b=>b.status==='done').length;

  return `
    <div class="page-head">
      <h2>Today's queue — all centers</h2>
      <p>Update a farmer's status as they move through the line. Status changes trigger an automatic SMS/WhatsApp alert.</p>
    </div>
    <div class="stat-row">
      <div class="stat"><div class="n">${waiting}</div><div class="l">Waiting</div></div>
      <div class="stat"><div class="n">${progress}</div><div class="l">In progress</div></div>
      <div class="stat"><div class="n">${done}</div><div class="l">Completed</div></div>
    </div>
    <div class="filter-row">
      <div class="chip ${filter==='all'?'active':''}" data-f="all">All centers</div>
      ${CENTERS.map(c=>`<div class="chip ${filter===c.id?'active':''}" data-f="${c.id}">${c.name}</div>`).join('')}
    </div>
    <table>
      <thead><tr><th>Token</th><th>Farmer</th><th>Center</th><th>Slot</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${rows.length ? rows.map(b=>{
          const center = CENTERS.find(c=>c.id===b.center);
          const pillClass = b.status==='waiting'?'waiting':b.status==='progress'?'progress':'done';
          const pillLabel = b.status==='waiting'?'Waiting':b.status==='progress'?'In progress':'Completed';
          const nextLabel = b.status==='waiting' ? 'Start' : b.status==='progress' ? 'Mark complete' : null;
          return `<tr>
            <td class="tok-badge">${b.token}</td>
            <td>${b.name}</td>
            <td>${center.name}</td>
            <td>${b.slot}</td>
            <td><span class="pill ${pillClass}">${pillLabel}</span></td>
            <td>${nextLabel ? `<button class="act-btn" data-token="${b.token}">${nextLabel}</button>` : '<button class="act-btn" disabled>Done</button>'}</td>
          </tr>`;
        }).join('') : `<tr><td colspan="6" class="empty">No bookings for this center yet.</td></tr>`}
      </tbody>
    </table>
  `;
}

function attachDashboardHandlers(){
  document.querySelectorAll('.chip').forEach(el=>{
    el.onclick=()=>{ currentFilter = el.dataset.f; render('dashboard'); };
  });
  document.querySelectorAll('.act-btn[data-token]').forEach(el=>{
    el.onclick=()=>{
      const b = bookings.find(x=>x.token===el.dataset.token);
      const center = CENTERS.find(c=>c.id===b.center);
      if(b.status==='waiting'){
        b.status='progress';
        logs.unshift({msg:`Token ${b.token}, it's your turn now at ${center.name}.`, ch:'WhatsApp', time:nowStr()});
      } else if(b.status==='progress'){
        b.status='done';
        logs.unshift({msg:`Token ${b.token} marked Completed at ${center.name}. Thank you!`, ch:'SMS', time:nowStr()});
      }
      render('dashboard');
    };
  });
}

/* ---------- LOG ---------- */
function logView(){
  return `
    <div class="page-head">
      <h2>Notification log</h2>
      <p>Every queue update triggers a message here — this is the free-tier SMS/WhatsApp alert stream farmers receive.</p>
    </div>
    <div class="card">
      ${logs.length ? logs.map(l=>`
        <div class="log-item">
          <div class="log-icon">✓</div>
          <div class="log-body">
            <span class="log-channel">${l.ch}</span>
            <p>${l.msg}</p>
            <div class="log-time">${l.time}</div>
          </div>
        </div>`).join('') : `<div class="empty">No alerts sent yet.</div>`}
    </div>
  `;
}

function nowStr(){
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h>=12?'PM':'AM';
  h = h%12 || 12;
  return `${h}:${m.toString().padStart(2,'0')} ${ampm}`;
}

function attachHandlers(view){
  if(view==='booking') attachBookingHandlers();
  if(view==='dashboard') attachDashboardHandlers();
}

document.querySelectorAll('.nav-btn').forEach(b=>{
  b.addEventListener('click', ()=> render(b.dataset.view));
});

render('booking');