/* ---------- TRANSLATIONS ---------- */
const I18N = {
  en: {
    navBooking:'Farmer Booking', navDashboard:'Manager Dashboard', navLog:'Notification Log',
    bookTitle:'Book a procurement slot',
    bookDesc:"Pick your nearest center and an open time slot. You'll get a token number and SMS/WhatsApp updates on your queue position.",
    step1:'Choose center', step2:'Pick a slot', step3:'Confirm details',
    continueBtn:'Continue', back:'Back', confirmBooking:'Confirm booking',
    nameLabel:'Full name', namePlaceholder:'As on your farmer ID',
    phoneLabel:'Mobile number', phonePlaceholder:'For SMS/WhatsApp alerts',
    confirmedMsg:'Your booking is confirmed', showToken:'Show this token number at the center gate',
    centerWord:'Center', todayWord:'Today', inQueue:'In queue', bookAnother:'Book another slot',
    dashTitle:"Today's queue — all centers",
    dashDesc:"Update a farmer's status as they move through the line. Status changes trigger an automatic SMS/WhatsApp alert.",
    waiting:'Waiting', inProgress:'In progress', completed:'Completed',
    allCenters:'All centers',
    tokenCol:'Token', farmerCol:'Farmer', centerCol:'Center', cropCol:'Crop', slotCol:'Slot', statusCol:'Status', actionCol:'Action',
    start:'Start', markComplete:'Mark complete', doneWord:'Done', noBookings:'No bookings for this center yet.',
    logTitle:'Notification log',
    logDesc:'Every queue update triggers a message here — this is the free-tier SMS/WhatsApp alert stream farmers receive.',
    noAlerts:'No alerts sent yet.',
    low:'Low congestion', medium:'Moderate congestion', high:'High congestion', estWait:'Est. wait',
    slotsPerHr:'slots/hr', away:'away',
    crops:{ Wheat:'Wheat', Paddy:'Paddy', Pulses:'Pulses', Mustard:'Mustard' }
  },
  hi: {
    navBooking:'किसान बुकिंग', navDashboard:'प्रबंधक डैशबोर्ड', navLog:'सूचना लॉग',
    bookTitle:'खरीद स्लॉट बुक करें',
    bookDesc:'अपने नज़दीकी केंद्र और खाली समय स्लॉट को चुनें। आपको टोकन नंबर और SMS/WhatsApp पर कतार की जानकारी मिलेगी।',
    step1:'केंद्र चुनें', step2:'स्लॉट चुनें', step3:'विवरण की पुष्टि करें',
    continueBtn:'जारी रखें', back:'वापस', confirmBooking:'बुकिंग की पुष्टि करें',
    nameLabel:'पूरा नाम', namePlaceholder:'किसान पहचान पत्र के अनुसार',
    phoneLabel:'मोबाइल नंबर', phonePlaceholder:'SMS/WhatsApp सूचना के लिए',
    confirmedMsg:'आपकी बुकिंग पक्की हो गई है', showToken:'यह टोकन नंबर केंद्र के गेट पर दिखाएं',
    centerWord:'केंद्र', todayWord:'आज', inQueue:'कतार में', bookAnother:'एक और स्लॉट बुक करें',
    dashTitle:'आज की कतार — सभी केंद्र',
    dashDesc:'किसान की स्थिति अपडेट करें जैसे-जैसे वे कतार में आगे बढ़ते हैं। स्थिति बदलने पर स्वतः SMS/WhatsApp सूचना भेजी जाती है।',
    waiting:'प्रतीक्षारत', inProgress:'प्रगति में', completed:'पूर्ण',
    allCenters:'सभी केंद्र',
    tokenCol:'टोकन', farmerCol:'किसान', centerCol:'केंद्र', cropCol:'फसल', slotCol:'स्लॉट', statusCol:'स्थिति', actionCol:'कार्रवाई',
    start:'शुरू करें', markComplete:'पूर्ण करें', doneWord:'पूर्ण', noBookings:'इस केंद्र के लिए अभी कोई बुकिंग नहीं है।',
    logTitle:'सूचना लॉग',
    logDesc:'हर कतार अपडेट पर यहां संदेश भेजा जाता है — यह किसानों को मिलने वाली मुफ्त SMS/WhatsApp सूचना है।',
    noAlerts:'अभी तक कोई सूचना नहीं भेजी गई।',
    low:'कम भीड़', medium:'मध्यम भीड़', high:'अधिक भीड़', estWait:'अनुमानित प्रतीक्षा',
    slotsPerHr:'स्लॉट/घंटा', away:'दूर',
    crops:{ Wheat:'गेहूं', Paddy:'धान', Pulses:'दालें', Mustard:'सरसों' }
  },
  pa: {
    navBooking:'ਕਿਸਾਨ ਬੁਕਿੰਗ', navDashboard:'ਮੈਨੇਜਰ ਡੈਸ਼ਬੋਰਡ', navLog:'ਸੂਚਨਾ ਲੌਗ',
    bookTitle:'ਖਰੀਦ ਸਲਾਟ ਬੁੱਕ ਕਰੋ',
    bookDesc:'ਆਪਣਾ ਨੇੜਲਾ ਕੇਂਦਰ ਅਤੇ ਖਾਲੀ ਸਮਾਂ ਸਲਾਟ ਚੁਣੋ। ਤੁਹਾਨੂੰ ਟੋਕਨ ਨੰਬਰ ਅਤੇ SMS/WhatsApp ਰਾਹੀਂ ਕਤਾਰ ਦੀ ਜਾਣਕਾਰੀ ਮਿਲੇਗੀ।',
    step1:'ਕੇਂਦਰ ਚੁਣੋ', step2:'ਸਲਾਟ ਚੁਣੋ', step3:'ਵੇਰਵਿਆਂ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    continueBtn:'ਜਾਰੀ ਰੱਖੋ', back:'ਪਿੱਛੇ', confirmBooking:'ਬੁਕਿੰਗ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
    nameLabel:'ਪੂਰਾ ਨਾਮ', namePlaceholder:'ਕਿਸਾਨ ਪਛਾਣ ਪੱਤਰ ਅਨੁਸਾਰ',
    phoneLabel:'ਮੋਬਾਈਲ ਨੰਬਰ', phonePlaceholder:'SMS/WhatsApp ਸੂਚਨਾ ਲਈ',
    confirmedMsg:'ਤੁਹਾਡੀ ਬੁਕਿੰਗ ਪੱਕੀ ਹੋ ਗਈ ਹੈ', showToken:'ਇਹ ਟੋਕਨ ਨੰਬਰ ਕੇਂਦਰ ਦੇ ਗੇਟ \'ਤੇ ਦਿਖਾਓ',
    centerWord:'ਕੇਂਦਰ', todayWord:'ਅੱਜ', inQueue:'ਕਤਾਰ ਵਿੱਚ', bookAnother:'ਇੱਕ ਹੋਰ ਸਲਾਟ ਬੁੱਕ ਕਰੋ',
    dashTitle:'ਅੱਜ ਦੀ ਕਤਾਰ — ਸਾਰੇ ਕੇਂਦਰ',
    dashDesc:'ਕਿਸਾਨ ਦੀ ਸਥਿਤੀ ਅੱਪਡੇਟ ਕਰੋ ਜਿਵੇਂ-ਜਿਵੇਂ ਉਹ ਲਾਈਨ ਵਿੱਚ ਅੱਗੇ ਵਧਦੇ ਹਨ। ਸਥਿਤੀ ਬਦਲਣ \'ਤੇ ਆਪਣੇ-ਆਪ SMS/WhatsApp ਸੂਚਨਾ ਭੇਜੀ ਜਾਂਦੀ ਹੈ।',
    waiting:'ਉਡੀਕ ਵਿੱਚ', inProgress:'ਜਾਰੀ', completed:'ਪੂਰਾ',
    allCenters:'ਸਾਰੇ ਕੇਂਦਰ',
    tokenCol:'ਟੋਕਨ', farmerCol:'ਕਿਸਾਨ', centerCol:'ਕੇਂਦਰ', cropCol:'ਫਸਲ', slotCol:'ਸਲਾਟ', statusCol:'ਸਥਿਤੀ', actionCol:'ਕਾਰਵਾਈ',
    start:'ਸ਼ੁਰੂ ਕਰੋ', markComplete:'ਪੂਰਾ ਕਰੋ', doneWord:'ਪੂਰਾ', noBookings:'ਇਸ ਕੇਂਦਰ ਲਈ ਹਾਲੇ ਕੋਈ ਬੁਕਿੰਗ ਨਹੀਂ।',
    logTitle:'ਸੂਚਨਾ ਲੌਗ',
    logDesc:'ਹਰ ਕਤਾਰ ਅੱਪਡੇਟ \'ਤੇ ਇੱਥੇ ਸੁਨੇਹਾ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ — ਇਹ ਕਿਸਾਨਾਂ ਨੂੰ ਮਿਲਣ ਵਾਲੀ ਮੁਫ਼ਤ SMS/WhatsApp ਸੂਚਨਾ ਹੈ।',
    noAlerts:'ਹਾਲੇ ਤੱਕ ਕੋਈ ਸੂਚਨਾ ਨਹੀਂ ਭੇਜੀ ਗਈ।',
    low:'ਘੱਟ ਭੀੜ', medium:'ਦਰਮਿਆਨੀ ਭੀੜ', high:'ਵੱਧ ਭੀੜ', estWait:'ਅਨੁਮਾਨਿਤ ਉਡੀਕ',
    slotsPerHr:'ਸਲਾਟ/ਘੰਟਾ', away:'ਦੂਰ',
    crops:{ Wheat:'ਕਣਕ', Paddy:'ਝੋਨਾ', Pulses:'ਦਾਲਾਂ', Mustard:'ਸਰ੍ਹੋਂ' }
  }
};
let currentLang = 'en';
function t(key){ return I18N[currentLang][key] ?? I18N.en[key]; }
function tCrop(cropName){ return I18N[currentLang].crops[cropName] ?? cropName; }

/* ---------- DATA ---------- */
const CENTERS = [
  {id:'c1', name:'Rampur Mandi Center', dist:'2.1 km', cap:4, crop:'Wheat'},
  {id:'c2', name:'Sultanpur Procurement Yard', dist:'5.4 km', cap:4, crop:'Paddy'},
  {id:'c3', name:'Govindpur Collection Point', dist:'7.8 km', cap:3, crop:'Pulses'},
  {id:'c4', name:'Khera Buyback Center', dist:'9.2 km', cap:3, crop:'Mustard'},
];
const SLOTS = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM'];

let bookings = [
  {token:'RM-014', center:'c1', slot:'8:00 AM', name:'Suresh Yadav', phone:'98xxxxxx21', status:'progress'},
  {token:'RM-015', center:'c1', slot:'8:00 AM', name:'Kamla Devi', phone:'98xxxxxx77', status:'waiting'},
  {token:'RM-016', center:'c1', slot:'8:00 AM', name:'Ram Lal', phone:'98xxxxxx09', status:'waiting'},
  {token:'RM-017', center:'c1', slot:'9:00 AM', name:'Pooja Sharma', phone:'98xxxxxx88', status:'waiting'},
  {token:'RM-018', center:'c1', slot:'9:00 AM', name:'Vinod Kumar', phone:'98xxxxxx14', status:'waiting'},
  {token:'SP-008', center:'c2', slot:'9:00 AM', name:'Mahesh Kumar', phone:'97xxxxxx03', status:'done'},
  {token:'SP-009', center:'c2', slot:'9:00 AM', name:'Rajendra Singh', phone:'97xxxxxx45', status:'waiting'},
  {token:'GP-004', center:'c3', slot:'10:00 AM', name:'Anita Devi', phone:'96xxxxxx31', status:'waiting'},
];
let logs = [
  {msg:'Your token RM-015 is 2nd in line at Rampur Mandi Center. Est. wait: 20 min.', ch:'SMS', time:'07:52 AM'},
  {msg:'Token SP-008 marked Completed at Sultanpur Procurement Yard. Thank you!', ch:'WhatsApp', time:'08:41 AM'},
];
let tokenCounter = 19;
let flow = {step:1, center:null, slot:null, name:'', phone:'', confirmedToken:null};
let currentFilter = 'all';
let currentView = 'booking';

/* ---------- CONGESTION (the "smart" element) ---------- */
function getCongestion(center){
  const queueCount = bookings.filter(b => b.center === center.id && b.status !== 'done').length;
  const ratio = queueCount / center.cap;
  const minutes = Math.max(0, Math.round(queueCount * (60 / center.cap)));
  let level = 'low';
  if (ratio > 1) level = 'high';
  else if (ratio > 0.5) level = 'medium';
  return { level, minutes, queueCount };
}
function formatWait(minutes){
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60), m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}
function congestionBadge(center){
  const c = getCongestion(center);
  const label = c.level === 'low' ? t('low') : c.level === 'medium' ? t('medium') : t('high');
  return `<span class="congestion cong-${c.level}"><span class="dot"></span>${label} · ${t('estWait')} ${formatWait(c.minutes)}</span>`;
}

/* ---------- RENDER ---------- */
function render(view){
  currentView = view;
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  const main = document.getElementById('view-content');
  if(view==='booking') main.innerHTML = bookingView();
  if(view==='dashboard') main.innerHTML = dashboardView(currentFilter);
  if(view==='log') main.innerHTML = logView();
  attachHandlers(view);
}

/* ---------- BOOKING ---------- */
function bookingView(){
  const stepLabel = [t('step1'), t('step2'), t('step3')];
  const steps = stepLabel.map((l,i)=>{
    const n=i+1;
    const cls = n<flow.step ? 'done' : n===flow.step ? 'current' : '';
    return `<div class="step ${cls}"><span class="num">${n}.</span>${l}</div>`;
  }).join('');

  let body = '';
  if(flow.confirmedToken){
    const b = flow.confirmedToken;
    const center = CENTERS.find(c=>c.id===b.center);
    const c = getCongestion(center);
    body = `
      <div class="token-card">
        <p>${t('confirmedMsg')}</p>
        <div class="token-num">${b.token}</div>
        <p>${t('showToken')}</p>
        <div class="token-meta">
          <div><strong>${center.name}</strong><span>${t('centerWord')}</span></div>
          <div><strong>${b.slot}</strong><span>${t('todayWord')}</span></div>
          <div><strong>${c.queueCount}</strong><span>${t('inQueue')}</span></div>
        </div>
      </div>
      <div class="row-end"><button class="btn btn-ghost" id="new-booking">${t('bookAnother')}</button></div>
    `;
  } else if(flow.step===1){
    body = `
      <div class="card">
        <div class="center-grid">
          ${CENTERS.map(c=>`
            <div class="center-opt ${flow.center===c.id?'selected':''}" data-center="${c.id}">
              <strong>${c.name}</strong>
              <span class="dist">${c.dist} ${t('away')} · ${c.cap} ${t('slotsPerHr')}</span>
              <div class="center-meta-row">
                <span class="crop-tag">🌾 ${tCrop(c.crop)}</span>
                ${congestionBadge(c)}
              </div>
            </div>`).join('')}
        </div>
        <div class="row-end"><button class="btn btn-primary" id="next1" ${!flow.center?'disabled':''}>${t('continueBtn')}</button></div>
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
          <button class="btn btn-ghost" id="back2">${t('back')}</button>
          <button class="btn btn-primary" id="next2" ${!flow.slot?'disabled':''}>${t('continueBtn')}</button>
        </div>
      </div>`;
  } else if(flow.step===3){
    body = `
      <div class="card">
        <label class="field-label">${t('nameLabel')}</label>
        <input type="text" id="f-name" placeholder="${t('namePlaceholder')}" value="${flow.name}">
        <label class="field-label">${t('phoneLabel')}</label>
        <input type="tel" id="f-phone" placeholder="${t('phonePlaceholder')}" value="${flow.phone}">
        <div class="row-end">
          <button class="btn btn-ghost" id="back3">${t('back')}</button>
          <button class="btn btn-primary" id="confirm3">${t('confirmBooking')}</button>
        </div>
      </div>`;
  }

  return `
    <div class="page-head">
      <h2>${t('bookTitle')}</h2>
      <p>${t('bookDesc')}</p>
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
      <h2>${t('dashTitle')}</h2>
      <p>${t('dashDesc')}</p>
    </div>
    <div class="stat-row">
      <div class="stat"><div class="n">${waiting}</div><div class="l">${t('waiting')}</div></div>
      <div class="stat"><div class="n">${progress}</div><div class="l">${t('inProgress')}</div></div>
      <div class="stat"><div class="n">${done}</div><div class="l">${t('completed')}</div></div>
    </div>
    <div class="filter-row">
      <div class="chip ${filter==='all'?'active':''}" data-f="all">${t('allCenters')}</div>
      ${CENTERS.map(c=>`<div class="chip ${filter===c.id?'active':''}" data-f="${c.id}">${c.name}</div>`).join('')}
    </div>
    <table>
      <thead><tr><th>${t('tokenCol')}</th><th>${t('farmerCol')}</th><th>${t('centerCol')}</th><th>${t('cropCol')}</th><th>${t('slotCol')}</th><th>${t('statusCol')}</th><th>${t('actionCol')}</th></tr></thead>
      <tbody>
        ${rows.length ? rows.map(b=>{
          const center = CENTERS.find(c=>c.id===b.center);
          const pillClass = b.status==='waiting'?'waiting':b.status==='progress'?'progress':'done';
          const pillLabel = b.status==='waiting'?t('waiting'):b.status==='progress'?t('inProgress'):t('completed');
          const nextLabel = b.status==='waiting' ? t('start') : b.status==='progress' ? t('markComplete') : null;
          return `<tr>
            <td class="tok-badge">${b.token}</td>
            <td>${b.name}</td>
            <td>${center.name}</td>
            <td>${tCrop(center.crop)}</td>
            <td>${b.slot}</td>
            <td><span class="pill ${pillClass}">${pillLabel}</span></td>
            <td>${nextLabel ? `<button class="act-btn" data-token="${b.token}">${nextLabel}</button>` : `<button class="act-btn" disabled>${t('doneWord')}</button>`}</td>
          </tr>`;
        }).join('') : `<tr><td colspan="7" class="empty">${t('noBookings')}</td></tr>`}
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
      <h2>${t('logTitle')}</h2>
      <p>${t('logDesc')}</p>
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
        </div>`).join('') : `<div class="empty">${t('noAlerts')}</div>`}
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

document.getElementById('lang-select').addEventListener('change', (e)=>{
  currentLang = e.target.value;
  render(currentView);
});

render('booking');