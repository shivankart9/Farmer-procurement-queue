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
    scanBtn:'Scan Kisan Card / Aadhaar', scanning:'Scanning…', scanned:'Details filled from card ✓',
    uploadIdBtn:'Upload ID photo instead', positionCard:'Position the card within the frame',
    cancel:'Cancel', captureBtn:'Capture', cameraUnsupported:"Camera isn't available on this device — try uploading a photo instead.",
    cameraDenied:'Camera access denied or unavailable — try uploading a photo instead.',
    reading:'Reading document…', readError:"Couldn't read all details clearly — please check and edit below",
    poolLabel:'Share transport with another farmer in the same slot',
    poolMatched:'Matched for shared transport with', poolNoMatch:"No match yet — we'll notify you if another farmer joins this slot",
    photoLabel:'Upload a photo of your grain (optional)', photoNote:'Manager will review this before your slot',
    photoAttached:'Photo attached', photoTagShort:'📷',
    noSmartTitle:"Don't have a smartphone?", noSmartDesc:'Give a missed call to book without the app —',
    comingSoon:'Coming soon',
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
    scanBtn:'किसान कार्ड / आधार स्कैन करें', scanning:'स्कैन हो रहा है…', scanned:'कार्ड से विवरण भर दिया गया ✓',
    uploadIdBtn:'फोटो अपलोड करें', positionCard:'कार्ड को फ्रेम के भीतर रखें',
    cancel:'रद्द करें', captureBtn:'कैप्चर करें', cameraUnsupported:'इस डिवाइस पर कैमरा उपलब्ध नहीं है — कृपया फोटो अपलोड करें।',
    cameraDenied:'कैमरा एक्सेस नहीं मिला — कृपया फोटो अपलोड करें।',
    reading:'दस्तावेज़ पढ़ा जा रहा है…', readError:'सभी विवरण स्पष्ट रूप से नहीं पढ़े जा सके — कृपया नीचे जांचें और संपादित करें',
    poolLabel:'उसी स्लॉट के किसान के साथ परिवहन साझा करें',
    poolMatched:'परिवहन साझा करने हेतु मिलान हुआ:', poolNoMatch:'अभी कोई मिलान नहीं — किसी अन्य किसान के जुड़ने पर सूचित करेंगे',
    photoLabel:'अपने अनाज की फोटो अपलोड करें (वैकल्पिक)', photoNote:'आपके स्लॉट से पहले प्रबंधक इसे देखेंगे',
    photoAttached:'फोटो जोड़ी गई', photoTagShort:'📷',
    noSmartTitle:'स्मार्टफोन नहीं है?', noSmartDesc:'बिना ऐप के बुक करने के लिए मिस्ड कॉल दें —',
    comingSoon:'जल्द आ रहा है',
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
    scanBtn:'ਕਿਸਾਨ ਕਾਰਡ / ਆਧਾਰ ਸਕੈਨ ਕਰੋ', scanning:'ਸਕੈਨ ਹੋ ਰਿਹਾ ਹੈ…', scanned:'ਕਾਰਡ ਤੋਂ ਵੇਰਵੇ ਭਰੇ ਗਏ ✓',
    uploadIdBtn:'ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ', positionCard:'ਕਾਰਡ ਨੂੰ ਫਰੇਮ ਦੇ ਅੰਦਰ ਰੱਖੋ',
    cancel:'ਰੱਦ ਕਰੋ', captureBtn:'ਕੈਪਚਰ ਕਰੋ', cameraUnsupported:'ਇਸ ਡਿਵਾਈਸ \'ਤੇ ਕੈਮਰਾ ਉਪਲਬਧ ਨਹੀਂ — ਕਿਰਪਾ ਕਰਕੇ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ।',
    cameraDenied:'ਕੈਮਰਾ ਪਹੁੰਚ ਨਹੀਂ ਮਿਲੀ — ਕਿਰਪਾ ਕਰਕੇ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ।',
    reading:'ਦਸਤਾਵੇਜ਼ ਪੜ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ…', readError:'ਸਾਰੇ ਵੇਰਵੇ ਸਪਸ਼ਟ ਤੌਰ \'ਤੇ ਨਹੀਂ ਪੜ੍ਹੇ ਜਾ ਸਕੇ — ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਜਾਂਚੋ ਅਤੇ ਸੋਧੋ',
    poolLabel:'ਉਸੇ ਸਲਾਟ ਦੇ ਕਿਸੇ ਹੋਰ ਕਿਸਾਨ ਨਾਲ ਆਵਾਜਾਈ ਸਾਂਝੀ ਕਰੋ',
    poolMatched:'ਆਵਾਜਾਈ ਸਾਂਝੀ ਕਰਨ ਲਈ ਮਿਲਾਨ ਹੋਇਆ:', poolNoMatch:'ਹਾਲੇ ਕੋਈ ਮਿਲਾਨ ਨਹੀਂ — ਕਿਸੇ ਹੋਰ ਕਿਸਾਨ ਦੇ ਜੁੜਨ \'ਤੇ ਸੂਚਿਤ ਕਰਾਂਗੇ',
    photoLabel:'ਆਪਣੇ ਅਨਾਜ ਦੀ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ (ਵਿਕਲਪਿਕ)', photoNote:'ਤੁਹਾਡੇ ਸਲਾਟ ਤੋਂ ਪਹਿਲਾਂ ਮੈਨੇਜਰ ਇਸਨੂੰ ਦੇਖੇਗਾ',
    photoAttached:'ਫੋਟੋ ਜੋੜੀ ਗਈ', photoTagShort:'📷',
    noSmartTitle:'ਸਮਾਰਟਫੋਨ ਨਹੀਂ ਹੈ?', noSmartDesc:'ਐਪ ਤੋਂ ਬਿਨਾਂ ਬੁੱਕ ਕਰਨ ਲਈ ਮਿਸਡ ਕਾਲ ਦਿਓ —',
    comingSoon:'ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ',
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
  {token:'RM-014', center:'c1', slot:'8:00 AM', name:'Suresh Yadav', phone:'98xxxxxx21', status:'progress', pool:false, hasPhoto:false},
  {token:'RM-015', center:'c1', slot:'8:00 AM', name:'Kamla Devi', phone:'98xxxxxx77', status:'waiting', pool:true, hasPhoto:false},
  {token:'RM-016', center:'c1', slot:'8:00 AM', name:'Ram Lal', phone:'98xxxxxx09', status:'waiting', pool:false, hasPhoto:true},
  {token:'RM-017', center:'c1', slot:'9:00 AM', name:'Pooja Sharma', phone:'98xxxxxx88', status:'waiting', pool:false, hasPhoto:false},
  {token:'RM-018', center:'c1', slot:'9:00 AM', name:'Vinod Kumar', phone:'98xxxxxx14', status:'waiting', pool:false, hasPhoto:false},
  {token:'SP-008', center:'c2', slot:'9:00 AM', name:'Mahesh Kumar', phone:'97xxxxxx03', status:'done', pool:false, hasPhoto:false},
  {token:'SP-009', center:'c2', slot:'9:00 AM', name:'Rajendra Singh', phone:'97xxxxxx45', status:'waiting', pool:false, hasPhoto:false},
  {token:'GP-004', center:'c3', slot:'10:00 AM', name:'Anita Devi', phone:'96xxxxxx31', status:'waiting', pool:false, hasPhoto:false},
];
let logs = [
  {msg:'Your token RM-015 is 2nd in line at Rampur Mandi Center. Est. wait: 20 min.', ch:'SMS', time:'07:52 AM'},
  {msg:'Token SP-008 marked Completed at Sultanpur Procurement Yard. Thank you!', ch:'WhatsApp', time:'08:41 AM'},
];
let tokenCounter = 19;
let flow = {step:1, center:null, slot:null, name:'', phone:'', pool:false, photoName:null, photoData:null, scanned:false, confirmedToken:null, poolPartner:null};
let currentFilter = 'all';
let currentView = 'booking';

/* ---------- CONGESTION ---------- */
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
function noSmartphoneBanner(){
  return `
    <div class="banner">
      <div class="banner-icon">📞</div>
      <div class="banner-text">
        <strong>${t('noSmartTitle')}</strong>
        <span>${t('noSmartDesc')} <span class="tollfree">1800-XXX-XXXX</span></span>
      </div>
      <span class="badge-soon">${t('comingSoon')}</span>
    </div>`;
}

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
        ${b.pool ? `<div class="token-extra">🚜 ${flow.poolPartner ? `${t('poolMatched')} ${flow.poolPartner}` : t('poolNoMatch')}</div>` : ''}
        ${b.hasPhoto ? `<div class="token-extra">📷 ${t('photoAttached')} — ${t('photoNote')}</div>` : ''}
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
        <div class="scan-btn-row">
          <button class="btn btn-scan" id="scan-camera-btn" type="button">📷 ${t('scanBtn')}</button>
          <button class="btn btn-scan-alt" id="scan-upload-btn" type="button">📁 ${t('uploadIdBtn')}</button>
        </div>
        <input type="file" id="id-upload-input" accept="image/*" style="display:none">
        <input type="file" id="camera-capture-input" accept="image/*" capture="environment" style="display:none">
        ${flow.scanned && !flow.scanWarning ? `<div class="scan-confirm">${t('scanned')}</div>` : ''}
        ${flow.scanWarning ? `<div class="scan-warning">${t('readError')}</div>` : ''}

        <label class="field-label">${t('nameLabel')}</label>
        <input type="text" id="f-name" placeholder="${t('namePlaceholder')}" value="${flow.name}">
        <label class="field-label">${t('phoneLabel')}</label>
        <input type="tel" id="f-phone" placeholder="${t('phonePlaceholder')}" value="${flow.phone}">

        <label class="checkbox-row">
          <input type="checkbox" id="f-pool" ${flow.pool?'checked':''}>
          <span>🚜 ${t('poolLabel')}</span>
        </label>

        <label class="field-label">${t('photoLabel')}</label>
        <input type="file" id="f-photo" accept="image/*">
        <div class="photo-note">${t('photoNote')}</div>
        ${flow.photoData ? `<img class="photo-preview" src="${flow.photoData}">` : ''}

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
    ${noSmartphoneBanner()}
    ${flow.confirmedToken?'':`<div class="stepper">${steps}</div>`}
    ${body}
  `;
}

let scanStream = null;

function closeScanOverlay(){
  if(scanStream){ scanStream.getTracks().forEach(tr=>tr.stop()); scanStream = null; }
  const ov = document.querySelector('.scan-overlay');
  if(ov) ov.remove();
}

function isSecureEnoughForLivePreview(){
  return location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
}
function isMobileDevice(){
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function openCameraScan(){
  // On phones, or on any page not served over https/localhost, getUserMedia's live
  // preview is blocked by the browser — use the OS-native camera app instead,
  // which works regardless of connection type or permission-prompt quirks.
  if(isMobileDevice() || !isSecureEnoughForLivePreview()){
    document.getElementById('camera-capture-input').click();
    return;
  }

  const overlay = document.createElement('div');
  overlay.className = 'scan-overlay';
  overlay.innerHTML = `
    <div class="scan-modal wide">
      <div class="scan-card-frame camera-frame">
        <video id="scan-video" autoplay playsinline muted></video>
        <div class="scan-line"></div>
      </div>
      <div class="scan-status" id="scan-status">${t('positionCard')}</div>
      <div class="scan-actions">
        <button class="btn btn-ghost" id="cancel-scan-btn">${t('cancel')}</button>
        <button class="btn btn-primary" id="capture-btn">${t('captureBtn')}</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('cancel-scan-btn').onclick = closeScanOverlay;

  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    showCameraError(overlay, t('cameraUnsupported'));
    return;
  }

  function attachStream(stream){
    scanStream = stream;
    const video = document.getElementById('scan-video');
    video.srcObject = stream;
    document.getElementById('capture-btn').onclick = ()=>{
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth; canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      if(scanStream){ scanStream.getTracks().forEach(tr=>tr.stop()); scanStream = null; }
      processScanImage(overlay, dataUrl);
    };
  }

  // Prefer a rear camera, but don't hard-fail if the device doesn't have one —
  // that would reject before ever showing the permission prompt on laptops/desktops.
  navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } } })
    .then(attachStream)
    .catch(()=>{
      // retry with any available camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(attachStream)
        .catch(()=>{
          closeScanOverlay();
          document.getElementById('id-upload-input').click();
        });
    });
}

function showCameraError(overlay, message){
  overlay.querySelector('.scan-modal').innerHTML = `
    <div class="scan-error">⚠️ ${message}</div>
    <div class="scan-actions">
      <button class="btn btn-ghost" id="cancel-scan-btn2">${t('cancel')}</button>
      <button class="btn btn-primary" id="try-upload-btn">📁 ${t('uploadIdBtn')}</button>
    </div>`;
  document.getElementById('cancel-scan-btn2').onclick = closeScanOverlay;
  document.getElementById('try-upload-btn').onclick = ()=>{
    closeScanOverlay();
    document.getElementById('id-upload-input').click();
  };
}

function openUploadScan(file){
  const reader = new FileReader();
  reader.onload = (ev)=>{
    const overlay = document.createElement('div');
    overlay.className = 'scan-overlay';
    document.body.appendChild(overlay);
    processScanImage(overlay, ev.target.result);
  };
  reader.readAsDataURL(file);
}

function extractPhone(text){
  const match = text.match(/\b[6-9]\d{9}\b/); // Indian mobile pattern
  return match ? match[0] : null;
}

function extractName(text){
  const skipWords = /government|india|income|tax|department|authority|unique|identification|male|female|dob|year|birth|address|आधार|सरकार/i;
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  for(const line of lines){
    const letterOnly = line.replace(/[^A-Za-z\s]/g,'').trim();
    if(letterOnly.length >= 4 && letterOnly.length <= 40 &&
       letterOnly.split(/\s+/).length <= 4 &&
       !skipWords.test(line) &&
       /^[A-Za-z\s.]+$/.test(letterOnly)){
      return letterOnly;
    }
  }
  return null;
}

function processScanImage(overlay, imageSrc){
  overlay.innerHTML = `
    <div class="scan-modal">
      <div class="scan-card-frame scan-captured">
        <img class="scan-captured-img" src="${imageSrc}">
        <div class="scan-line"></div>
      </div>
      <div class="scan-status" id="scan-status">${t('reading')}</div>
      <div class="scan-progress"><div class="scan-progress-fill" id="scan-progress-fill"></div></div>
    </div>`;

  const fill = overlay.querySelector('#scan-progress-fill');
  const statusEl = overlay.querySelector('#scan-status');

  if(typeof Tesseract === 'undefined'){
    fill.style.transition = 'width 1.5s linear';
    requestAnimationFrame(()=>{ fill.style.width = '100%'; });
    setTimeout(()=> finishScan(overlay, ''), 1500);
    return;
  }

  Tesseract.recognize(imageSrc, 'eng', {
    logger: (m)=>{
      if(m.status === 'recognizing text'){
        const pct = Math.round(m.progress * 100);
        fill.style.transition = 'width .2s linear';
        fill.style.width = pct + '%';
        statusEl.textContent = `${t('reading')} ${pct}%`;
      } else {
        statusEl.textContent = t('reading');
      }
    }
  }).then(({ data: { text } })=>{
    finishScan(overlay, text);
  }).catch(()=>{
    finishScan(overlay, '');
  });
}

function finishScan(overlay, extractedText){
  const name = extractName(extractedText);
  const phone = extractPhone(extractedText);

  overlay.querySelector('#scan-status').textContent = (name || phone) ? t('scanned') : t('readError');
  const frame = overlay.querySelector('.scan-card-frame');
  frame.classList.add(name || phone ? 'scan-success' : 'scan-partial');
  overlay.querySelector('#scan-progress-fill').style.width = '100%';

  setTimeout(()=>{
    overlay.remove();
    if(name) flow.name = name;
    if(phone) flow.phone = phone;
    flow.scanned = true;
    flow.scanWarning = !name && !phone;
    render('booking');
  }, 1100);
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

  const camBtn=document.getElementById('scan-camera-btn');
  if(camBtn) camBtn.onclick=()=> openCameraScan();

  const uploadBtn=document.getElementById('scan-upload-btn');
  const uploadInput=document.getElementById('id-upload-input');
  if(uploadBtn) uploadBtn.onclick=()=> uploadInput.click();
  if(uploadInput) uploadInput.onchange=(e)=>{
    const file = e.target.files[0];
    if(file) openUploadScan(file);
  };

  const cameraCaptureInput=document.getElementById('camera-capture-input');
  if(cameraCaptureInput) cameraCaptureInput.onchange=(e)=>{
    const file = e.target.files[0];
    if(file) openUploadScan(file);
  };

  const poolBox=document.getElementById('f-pool');
  if(poolBox) poolBox.onchange=(e)=>{ flow.pool = e.target.checked; };

  const photoInput=document.getElementById('f-photo');
  if(photoInput) photoInput.onchange=(e)=>{
    const file = e.target.files[0];
    if(!file) return;
    flow.photoName = file.name;
    const reader = new FileReader();
    reader.onload = (ev)=>{ flow.photoData = ev.target.result; render('booking'); };
    reader.readAsDataURL(file);
  };

  const c3=document.getElementById('confirm3');
  if(c3) c3.onclick=()=>{
    flow.name = document.getElementById('f-name').value || flow.name || 'Farmer';
    flow.phone = document.getElementById('f-phone').value || flow.phone || '—';
    const center = CENTERS.find(c=>c.id===flow.center);
    const prefix = center.name.split(' ')[0].slice(0,2).toUpperCase();
    const token = `${prefix}-0${tokenCounter++}`;

    // tractor-pooling match check
    let poolPartner = null;
    if(flow.pool){
      const match = bookings.find(x=> x.pool && x.center===flow.center && x.slot===flow.slot && x.status!=='done');
      if(match) poolPartner = match.name;
    }
    flow.poolPartner = poolPartner;

    const b = {
      token, center:flow.center, slot:flow.slot, name:flow.name, phone:flow.phone,
      status:'waiting', pool: flow.pool, hasPhoto: !!flow.photoData
    };
    bookings.push(b);
    logs.unshift({msg:`Booking confirmed: token ${token} at ${center.name}, ${flow.slot} today.`, ch:'SMS', time:nowStr()});
    if(flow.pool && poolPartner) logs.unshift({msg:`Token ${token} matched for shared transport with ${poolPartner}.`, ch:'WhatsApp', time:nowStr()});
    flow.confirmedToken = b;
    render('booking');
  };

  const nb=document.getElementById('new-booking');
  if(nb) nb.onclick=()=>{
    flow = {step:1, center:null, slot:null, name:'', phone:'', pool:false, photoName:null, photoData:null, scanned:false, confirmedToken:null, poolPartner:null};
    render('booking');
  };
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
          const tags = `${b.pool?' 🚜':''}${b.hasPhoto?' '+t('photoTagShort'):''}`;
          return `<tr>
            <td class="tok-badge">${b.token}</td>
            <td>${b.name}${tags}</td>
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