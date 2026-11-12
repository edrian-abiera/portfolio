/* ===== EDIT HERE: your real links. Leave '' until you have them. ===== */
const LINKS={facebook:'https://www.facebook.com/Edrian.Abiera25',gmail:'abieraedrian25@gmail.com',github:'https://github.com/edrian-abiera'}; // gmail = address only
const PROJECTS=[
 {title:'Web-Based Inventory Management System',grad:'#2563eb,#22d3ee',tags:['HTML','CSS','JavaScript','MySQL'],
  desc:'Helps small businesses organize products, monitor stock levels, and keep inventory records.',
  feat:['Dashboard overview','Add, edit, delete products','Search and categories','Low-stock alerts and transaction history'],
  demo:'',src:''},
 {title:'Barangay Document Request and Verifiable E-Certificate System',grad:'#7c3aed,#3b82f6',tags:['HTML','CSS','JavaScript','React'],
  desc:'Residents request barangay documents online and anyone can verify issued e-certificates by QR code.',
  feat:['Registration, login, resident dashboard','Request status tracking','Admin request management','Certificate and QR generation, verification page'],
  demo:'',src:''},
 {title:'Community Waste Segregation Tracking and Route Coordination Platform',grad:'#059669,#22d3ee',tags:['HTML','CSS','JavaScript','React','MySQL'],
  desc:'Encourages proper waste segregation, tracks collection activity, and coordinates schedules and routes.',
  feat:['Segregation reports and categories','Collection schedule and status','Community reports','Route dashboard and charts'],
  demo:'',src:''}];
const SKILLS={'Frontend Development':[['HTML5','HTML','Page structure and semantic markup'],['CSS3','CSS','Layouts, animation, responsive styling'],['JavaScript','JS','Interactivity and app logic'],['React.js','Re','Component-based interfaces'],['Vue.js','Vu','Exploring reactive UI development'],['Angular','Ng','Learning structured front-end apps']],
 'Design':[['UI/UX Design','UX','Designing usable, clear interfaces'],['Responsive Web Design','RW','Layouts that fit any screen'],['Wireframing','Wf','Sketching layouts before building'],['Prototyping','Pt','Testing ideas before coding'],['User Interface Design','UI','Visual hierarchy and consistency']],
 'Additional Skills':[['Database Management','DB','Organizing and querying data'],['MySQL','My','Relational databases for systems'],['Git and GitHub','Gt','Version control and sharing code'],['Problem Solving','PS','Breaking problems into steps'],['System Development','SD','Planning and building full systems']]};
const PH='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="#111a3a"/><text x="200" y="240" fill="#a3aecb" font-family="sans-serif" font-size="22" text-anchor="middle">PROFILE PHOTO</text><text x="200" y="275" fill="#a3aecb" font-family="sans-serif" font-size="15" text-anchor="middle">assets/images/profile.png</text></svg>');
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const href=k=>!LINKS[k]?'#contact':k==='gmail'?'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(LINKS[k])+'&su='+encodeURIComponent('Hello Edrian'):LINKS[k];
const toast=m=>{const s=$('#status');s.textContent=m;s.className='show'};
function link(k,label,cls){const a=document.createElement('a');a.href=href(k);a.className=cls;a.textContent=label;a.setAttribute('aria-label',k);
 if(LINKS[k]){a.target='_blank';a.rel='noopener'}
 if(!LINKS[k]){a.title='Add your '+k+' link in the LINKS settings';a.addEventListener('click',e=>{e.preventDefault();$('#contact').scrollIntoView();toast('The '+k+' link is not set yet. Add it in the LINKS settings.')})}return a}
/* social + contact */
$$('[data-social]').forEach(b=>[['facebook','f'],['gmail','@'],['github','GH']].forEach(([k,l])=>b.append(link(k,l,'glass'))));
[['facebook','Facebook'],['gmail','Gmail'],['github','GitHub']].forEach(([k,l])=>$('#clist').append(link(k,l+(LINKS[k]?'':' (link not set)'),'')));
/* skills */
const cd=Object.values(SKILLS).flat().map(([n,i,d])=>`<div class="card glass"><div class="ic">${i}</div><h3>${n}</h3><p>${d}</p></div>`).join('');$('#skillbox').innerHTML=`<div class="mq"><div class="mtr">${cd}${cd}</div></div>`;
/* projects carousel */
const link2=(u,t,c)=>u?`<a class="btn ${c}" href="${u}" target="_blank" rel="noopener">${t}</a>`:`<span class="btn off" title="Placeholder: add this link in PROJECTS" aria-disabled="true">${t} (link not set)</span>`;
$('#track').innerHTML=PROJECTS.map(p=>`<div class="slide"><article class="proj glass"><div class="shot" style="background:linear-gradient(135deg,${p.grad})"><strong>${esc(p.title)}</strong><i style="width:80%"></i><i style="width:55%"></i><i style="width:68%"></i></div><div class="pbody"><h3>${esc(p.title)}</h3><p>${p.desc}</p><ul>${p.feat.map(f=>`<li>${f}</li>`).join('')}</ul><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p class="note">Working prototype: data is saved in this browser only (localStorage). No backend.</p><div class="cta" style="margin:0"><button class="btn pri" data-demo="${PROJECTS.indexOf(p)}">Live Demo</button>${link2(LINKS.github,'View Source Code','')}</div></div></article></div>`).join('');
let cur=0,sx=0;const n=PROJECTS.length;
$('#dots').innerHTML=PROJECTS.map((_,i)=>`<button aria-label="Go to project ${i+1}"></button>`).join('');
function go(i){cur=(i+n)%n;$('#track').style.transform=`translateX(-${cur*100}%)`;$$('#dots button').forEach((d,j)=>d.className=j===cur?'on':'')}
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);$$('#dots button').forEach((d,i)=>d.onclick=()=>go(i));
const vp=$('.viewport');vp.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
vp.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)go(cur+(d<0?1:-1))});go(0);
/* typing */
const words=['3rd Year IT Student','Aspiring Web Developer','UI/UX Designer'];let w=0,c=0,del=false;const t=$('#type');
function tick(){if(reduce){t.textContent=words.join(' | ');return}
 const s=words[w];t.textContent=s.slice(0,c);
 if(!del&&c===s.length){del=true;return setTimeout(tick,1400)}
 if(del&&c===0){del=false;w=(w+1)%words.length}
 c+=del?-1:1;setTimeout(tick,del?40:80)}tick();
/* nav */
$('#burger').onclick=e=>{const o=$('#links').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$$('#links a').forEach(a=>a.addEventListener('click',()=>$('#links').classList.remove('open')));
const secs=$$('main section'),nav=$$('#links a');
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));
/* reveal, top button, loader */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.rv').forEach(el=>io.observe(el));
addEventListener('scroll',()=>$('#top').classList.toggle('show',scrollY>600),{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('done'),reduce?0:500));
/* theme */
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;$('#theme').textContent=t==='light'?'☾':'☀';try{localStorage.setItem('theme',t)}catch(e){}}
let st0='dark';try{st0=localStorage.getItem('theme')||'dark'}catch(e){}
setTheme(st0);$('#theme').onclick=()=>setTheme(root.dataset.theme==='light'?'dark':'light');
/* binary waterfall */
(()=>{const cv=$('#bin'),x=cv.getContext('2d'),fs=16;let cols,dr;
const size=()=>{cv.width=innerWidth;cv.height=innerHeight;cols=Math.ceil(cv.width/fs);dr=Array.from({length:cols},()=>Math.random()*-40)};size();addEventListener('resize',size);
function draw(){x.clearRect(0,0,cv.width,cv.height);x.font=fs+'px monospace';x.fillStyle=getComputedStyle(root).getPropertyValue('--bin');
 for(let i=0;i<cols;i++){for(let k=0;k<12;k++){x.globalAlpha=(1-k/12)*.55;x.fillText(Math.random()<.5?'0':'1',i*fs,(dr[i]-k)*fs)}
  dr[i]+=.22;if((dr[i]-12)*fs>cv.height)dr[i]=Math.random()*-20}
 x.globalAlpha=1;if(!reduce)requestAnimationFrame(draw)}
draw();new MutationObserver(()=>reduce&&draw()).observe(root,{attributes:true})})();
/* ===== project prototypes (localStorage, no backend) ===== */
const db=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},save=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
function mount(el,view,act,after){const r=()=>{el.innerHTML=view();after&&after(el)};
 el.onclick=e=>{const b=e.target.closest('[data-a]');if(b){act[b.dataset.a](b.dataset);r()}};
 el.onsubmit=e=>{e.preventDefault();act[e.target.dataset.f](Object.fromEntries(new FormData(e.target)));r()};
 el.oninput=e=>{const t=e.target;if(t.dataset.live!==undefined){act.set(t.name,t.value);r();const n=el.querySelector('[name="'+t.name+'"]');if(n){n.focus();try{n.setSelectionRange(n.value.length,n.value.length)}catch(x){}}}};r()}
function qrLib(ok,fail){if(window.QRCode)return ok();const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';s.onload=ok;s.onerror=fail;document.head.append(s)}
/* Project 1: Inventory */
function inv(el){let items=db('inv',[{id:1,name:'Bond Paper A4',cat:'Office',qty:40,min:15},{id:2,name:'Ballpen (blue)',cat:'Office',qty:8,min:20},{id:3,name:'Instant Coffee',cat:'Pantry',qty:30,min:10},{id:4,name:'Hand Soap',cat:'Cleaning',qty:5,min:6}]),log=db('invlog',[]),q='',cat='All',ed=null;
 const sv=()=>{save('inv',items);save('invlog',log)},lg=t=>{log.unshift(new Date().toLocaleString()+' - '+t);log=log.slice(0,8)};
 mount(el,()=>{const low=items.filter(i=>i.qty<=i.min),cats=['All',...new Set(items.map(i=>i.cat))],e=items.find(i=>i.id===ed)||{},rows=items.filter(i=>(cat==='All'||i.cat===cat)&&i.name.toLowerCase().includes(q.toLowerCase()));
 return `<div class="st"><div><b>${items.length}</b>Products</div><div><b>${items.reduce((a,i)=>a+i.qty,0)}</b>Units in stock</div><div><b>${low.length}</b>Low stock</div></div>${low.length?`<div class="warn">Low stock: ${low.map(i=>esc(i.name)).join(', ')}</div>`:''}
 <form class="af" data-f="save"><input type="hidden" name="id" value="${e.id||''}"><input name="name" placeholder="Product name" required value="${esc(e.name||'')}"><input name="cat" placeholder="Category" required value="${esc(e.cat||'')}"><input name="qty" type="number" min="0" placeholder="Qty" required value="${e.qty??''}"><input name="min" type="number" min="0" placeholder="Low-stock level" required value="${e.min??''}"><button class="btn pri sm">${ed?'Save changes':'Add product'}</button></form>
 <div class="af"><input name="q" data-live placeholder="Search products" value="${esc(q)}"><select name="fc" data-live aria-label="Filter by category">${cats.map(c=>`<option${c===cat?' selected':''}>${esc(c)}</option>`).join('')}</select></div>
 <div class="tw"><table class="tb"><tr><th>Product</th><th>Category</th><th>Qty</th><th>Status</th><th>Actions</th></tr>${rows.map(i=>`<tr><td>${esc(i.name)}</td><td>${esc(i.cat)}</td><td>${i.qty}</td><td><span class="bd ${i.qty<=i.min?'r':'g'}">${i.qty<=i.min?'Low':'OK'}</span></td><td><button class="btn sm" data-a="adj" data-id="${i.id}" data-d="1" aria-label="Stock in">+1</button> <button class="btn sm" data-a="adj" data-id="${i.id}" data-d="-1" aria-label="Stock out">-1</button> <button class="btn sm" data-a="edit" data-id="${i.id}">Edit</button> <button class="btn sm" data-a="del" data-id="${i.id}">Delete</button></td></tr>`).join('')||'<tr><td colspan="5">No products match.</td></tr>'}</table></div>
 <h3 style="margin:16px 0 6px">Transaction history</h3>${log.map(l=>`<div style="color:var(--soft);font-size:.88rem">${esc(l)}</div>`).join('')||'<p>No transactions yet.</p>'}`},
 {set:(n,v)=>n==='q'?q=v:cat=v,save:d=>{const o={name:d.name.trim(),cat:d.cat.trim(),qty:+d.qty,min:+d.min};if(d.id){Object.assign(items.find(i=>i.id==d.id),o);lg('Edited '+o.name)}else{items.push({id:Date.now(),...o});lg('Added '+o.name)}ed=null;sv()},edit:d=>ed=+d.id,del:d=>{const i=items.find(x=>x.id==d.id);if(confirm('Delete '+i.name+'?')){items=items.filter(x=>x!==i);lg('Deleted '+i.name);sv()}},adj:d=>{const i=items.find(x=>x.id==d.id);i.qty=Math.max(0,i.qty+ +d.d);lg((d.d>0?'Stock in: ':'Stock out: ')+i.name);sv()}})}
/* Project 2: Barangay e-certificates */
function brgy(el){let D=db('brgy',{u:null,reqs:[]}),cert=null,chk=null;const sv=()=>save('brgy',D),T=['Barangay Clearance','Certificate of Residency','Certificate of Indigency'],bd=s=>`<span class="bd ${s==='Approved'?'g':s==='Rejected'?'r':'w'}">${s}</span>`;
 mount(el,()=>{const u=D.u,ver=`<h3 style="margin:16px 0 6px">Verify a certificate</h3><form class="af" data-f="chk"><input name="code" placeholder="Certificate code" required><button class="btn sm">Verify</button></form>${chk===null?'':chk?`<div style="color:#16a34a">Valid: ${chk.type} issued to ${esc(chk.by)}.</div>`:'<div class="warn">No certificate with that code in this browser.</div>'}`;
 if(!u)return `<form class="af" data-f="login"><input name="name" placeholder="Full name" required><select name="role" aria-label="Role"><option value="resident">Resident</option><option value="admin">Admin (demo)</option></select><button class="btn pri sm">Register / Log in</button></form><p style="color:var(--soft);font-size:.85rem">Prototype sign-in: no password, data stays in this browser.</p>`+ver;
 const mine=u.role==='admin'?D.reqs:D.reqs.filter(r=>r.by===u.name),c=D.reqs.find(r=>r.id===cert);
 return `<div class="mbar"><span>Signed in as <b>${esc(u.name)}</b> (${u.role})</span><button class="btn sm" data-a="out">Log out</button></div>`+(u.role==='resident'?`<form class="af" data-f="req"><select name="type" aria-label="Document">${T.map(t=>`<option>${t}</option>`).join('')}</select><input name="purpose" placeholder="Purpose" required><button class="btn pri sm">Submit request</button></form>`:'')+
 `<div class="tw"><table class="tb"><tr><th>Resident</th><th>Document</th><th>Purpose</th><th>Status</th><th>Actions</th></tr>${mine.map(r=>`<tr><td>${esc(r.by)}</td><td>${r.type}</td><td>${esc(r.purpose)}</td><td>${bd(r.status)}</td><td>${u.role==='admin'&&r.status==='Pending'?`<button class="btn sm" data-a="ok" data-id="${r.id}">Approve</button> <button class="btn sm" data-a="no" data-id="${r.id}">Reject</button>`:''}${r.status==='Approved'?`<button class="btn sm" data-a="cert" data-id="${r.id}">View certificate</button>`:''}</td></tr>`).join('')||'<tr><td colspan="5">No requests yet.</td></tr>'}</table></div>`+
 (c?`<div class="glass" style="padding:18px;margin-top:14px;text-align:center"><h3>${c.type}</h3><p>This certifies that <b>${esc(c.by)}</b> is a recorded resident. Purpose: ${esc(c.purpose)}.</p><div id="qr" style="display:inline-block;background:#fff;padding:8px"></div><p>Code: <b>${c.code}</b></p></div>`:'')+ver},
 {login:d=>{D.u={name:d.name.trim(),role:d.role};sv()},out:()=>{D.u=null;cert=null;sv()},req:d=>{D.reqs.push({id:Date.now(),by:D.u.name,type:d.type,purpose:d.purpose,status:'Pending'});sv()},ok:d=>{const r=D.reqs.find(x=>x.id==d.id);r.status='Approved';r.code='BRGY-'+Math.random().toString(36).slice(2,8).toUpperCase();sv()},no:d=>{D.reqs.find(x=>x.id==d.id).status='Rejected';sv()},cert:d=>cert=+d.id,chk:d=>{chk=D.reqs.find(r=>r.code===d.code.trim().toUpperCase())||false}},
 e=>{const q=e.querySelector('#qr');if(q)qrLib(()=>{q.innerHTML='';new QRCode(q,{text:D.reqs.find(r=>r.id===cert).code,width:132,height:132})},()=>q.textContent='QR unavailable')})}
/* Project 3: Waste tracking and routes */
function waste(el){let D=db('waste',{reps:[{cat:'Recyclable',kg:12,zone:'Zone 1',ok:true},{cat:'Biodegradable',kg:30,zone:'Zone 2',ok:true},{cat:'Residual',kg:9,zone:'Zone 1',ok:false}],routes:[{zone:'Zone 1',day:'Monday',st:'Pending'},{zone:'Zone 2',day:'Wednesday',st:'En route'},{zone:'Zone 3',day:'Friday',st:'Collected'}],issues:[]}),adm=false;const sv=()=>save('waste',D),C=['Biodegradable','Recyclable','Residual','Hazardous'],S=['Pending','En route','Collected'],H=t=>`<h3 style="margin:16px 0 6px">${t}</h3>`;
 mount(el,()=>{const tot=C.map(c=>D.reps.filter(r=>r.cat===c).reduce((a,r)=>a+r.kg,0)),mx=Math.max(1,...tot),rate=D.reps.length?Math.round(D.reps.filter(r=>r.ok).length/D.reps.length*100):0;
 return `<div class="mbar"><span>Mode: <b>${adm?'Admin':'Resident'}</b></span><button class="btn sm" data-a="mode">Switch to ${adm?'Resident':'Admin'}</button></div><div class="st"><div><b>${D.reps.length}</b>Reports</div><div><b>${tot.reduce((a,b)=>a+b,0)} kg</b>Total waste</div><div><b>${rate}%</b>Properly segregated</div><div><b>${D.routes.filter(r=>r.st==='Collected').length}/${D.routes.length}</b>Routes collected</div></div>
 ${C.map((c,i)=>`<div style="display:grid;grid-template-columns:110px 1fr 56px;gap:8px;align-items:center;font-size:.88rem;margin-bottom:6px"><span>${c}</span><div><div class="bar" style="width:${tot[i]/mx*100}%"></div></div><span>${tot[i]} kg</span></div>`).join('')}
 ${H('Report segregated waste')}<form class="af" data-f="rep"><select name="cat" aria-label="Waste category">${C.map(c=>`<option>${c}</option>`).join('')}</select><input name="kg" type="number" min="1" placeholder="Kilograms" required><input name="zone" placeholder="Zone" required><label style="margin:0"><input type="checkbox" name="ok" style="width:auto;margin-right:6px">Properly segregated</label><button class="btn pri sm">Submit report</button></form>
 ${H('Collection schedule and route status')}<div class="tw"><table class="tb"><tr><th>Zone</th><th>Day</th><th>Status</th>${adm?'<th>Admin</th>':''}</tr>${D.routes.map((r,i)=>`<tr><td>${esc(r.zone)}</td><td>${r.day}</td><td><span class="bd ${r.st==='Collected'?'g':r.st==='Pending'?'w':''}">${r.st}</span></td>${adm?`<td><button class="btn sm" data-a="adv" data-i="${i}">Next status</button> <button class="btn sm" data-a="rm" data-i="${i}">Remove</button></td>`:''}</tr>`).join('')}</table></div>
 ${adm?`<form class="af" data-f="route" style="margin-top:10px"><input name="zone" placeholder="Zone" required><select name="day" aria-label="Day">${['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(d=>`<option>${d}</option>`).join('')}</select><button class="btn sm">Add route</button></form>`:''}
 ${H('Community reports')}<form class="af" data-f="iss"><input name="t" placeholder="Describe the issue (missed pickup, dumping)" required><button class="btn sm">Send report</button></form>${D.issues.map(t=>`<div style="color:var(--soft);font-size:.88rem">${esc(t)}</div>`).join('')||'<p>No community reports yet.</p>'}`},
 {mode:()=>adm=!adm,rep:d=>{D.reps.push({cat:d.cat,kg:+d.kg,zone:d.zone,ok:!!d.ok});sv()},adv:d=>{const r=D.routes[+d.i];r.st=S[(S.indexOf(r.st)+1)%3];sv()},rm:d=>{D.routes.splice(+d.i,1);sv()},route:d=>{D.routes.push({zone:d.zone,day:d.day,st:'Pending'});sv()},iss:d=>{D.issues.unshift(d.t);sv()}})}
const APPS=[inv,brgy,waste];
/* demo modal */
const M=document.createElement('div');M.id='modal';M.setAttribute('role','dialog');M.setAttribute('aria-modal','true');M.setAttribute('aria-labelledby','mt');
M.innerHTML='<div class="mbox glass"><div class="mbar"><strong id="mt"></strong><button class="btn sm" id="mx">Close</button></div><div id="mb"></div></div>';document.body.append(M);
const closeApp=()=>{M.className='';document.body.style.overflow=''};
$('#mx').onclick=closeApp;addEventListener('keydown',e=>e.key==='Escape'&&closeApp());M.addEventListener('click',e=>e.target===M&&closeApp());
$$('[data-demo]').forEach(b=>b.onclick=()=>{const i=+b.dataset.demo;$('#mt').textContent=PROJECTS[i].title;M.className='show';document.body.style.overflow='hidden';APPS[i]($('#mb'))});
/* form: validates only. Nothing is sent without a backend/email service. */
$('#form').addEventListener('submit',e=>{e.preventDefault();let ok=true;const f=e.target;
 $$('input,textarea',f).forEach(el=>{let m='';const v=el.value.trim();
  if(!v)m='This field is required.';else if(el.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))m='Enter a valid email address.';else if(el.name==='message'&&v.length<10)m='Write at least 10 characters.';
  el.setAttribute('aria-invalid',!!m);el.nextElementSibling.textContent=m;if(m)ok=false});
 const s=$('#status');
 if(!ok){s.className='show';s.textContent='Fix the highlighted fields and try again.';return}
 s.className='show';s.textContent='Form is valid, but no message was sent: this site has no email service connected yet. Connect one (such as Formspree or EmailJS) or use the Gmail button above.'});
