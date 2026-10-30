/* Give Love — логика сайта: каталог, карточка шаблона, листалка, корзина */
const $=s=>document.querySelector(s);
const rub=n=>n===0?'Бесплатно':n.toLocaleString('ru-RU')+' ₽';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* placeholder "photo": layered gradients from template colours */
function ph(t,seed,cap,pos){
  const a=[160,200,135,220,180][seed%5], x=[70,30,60,25,50][seed%5], y=[28,35,22,40,30][seed%5];
  const bg=`radial-gradient(circle at ${x}% ${y}%, ${t.acc}cc 0 9%, transparent 9.5%),linear-gradient(${a+10}deg, transparent 58%, ${t.bg}ee 58.3%),linear-gradient(${a-30}deg, transparent 66%, ${t.bg}aa 66.3%),linear-gradient(${a}deg, ${t.acc}, ${t.bg})`;
  return `<div class="ph" style="${pos};background:${bg}" data-cap="${esc(cap||'Фото')}"></div>`;
}
function mfs(t,max,k){const w=/Unbounded/.test(t.font)?.78:1;return Math.min(max,k*w/t.mast.length).toFixed(1)}
function vars(t){return `--c-bg:${t.bg};--c-fg:${t.fg};--c-acc:${t.acc};--c-font:'${t.font}',Georgia,serif;--p-bg:${t.pbg};--p-fg:${t.pfg}`}
const REL='position:relative;border-radius:1cqw;height:';

function cover(t){
  const v=vars(t);
  if(!t.coverImg&&t.pageImgs&&t.pageImgs[0]) return `<div class="cover"><img loading="lazy" decoding="async" src="${t.pageImgs[0]}" alt="Обложка «${esc(t.name)}»"></div>`;
  if(t.coverImg) return `<div class="cover"><img loading="lazy" decoding="async" src="${t.coverImg}" alt="Обложка «${esc(t.name)}»"></div>`;
  if(t.layout==='classic') return `<div class="cover" style="${v}">
    ${ph(t,0,'Фото обложки','inset:0')}
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,${t.bg}00 40%,${t.bg}e6 88%)"></div>
    <div style="position:absolute;top:5cqw;left:5cqw;right:5cqw;text-align:center">
      <div class="mast" style="font-size:${mfs(t,24,128)}cqw">${esc(t.mast)}</div>
      <div class="cv-issue" style="margin-top:2cqw">${esc(t.issue)}</div>
    </div>
    <div style="position:absolute;left:6cqw;right:26cqw;bottom:6cqw;display:flex;flex-direction:column;gap:2.4cqw">
      <div class="cv-head">${esc(t.head)}</div>
      ${t.subs.map(s=>`<div class="cv-sub">— ${esc(s)}</div>`).join('')}
    </div>
    <div class="barcode"></div></div>`;
  if(t.layout==='bold') return `<div class="cover" style="${v}">
    <div class="mast" style="position:absolute;top:4cqw;left:4cqw;right:4cqw;font-size:${mfs(t,30,130)}cqw;color:${t.acc}">${esc(t.mast)}</div>
    ${ph(t,1,'Фото обложки','left:5cqw;right:5cqw;top:33cqw;height:62cqw;border-radius:1cqw')}
    <div style="position:absolute;left:5cqw;right:5cqw;bottom:5cqw;display:flex;flex-direction:column;gap:2.4cqw">
      <div class="cv-issue">${esc(t.issue)}</div>
      <div class="cv-head" style="background:${t.acc};color:${t.bg};padding:2.4cqw 3cqw;margin-right:18cqw;font-size:7.4cqw">${esc(t.head)}</div>
      ${t.subs.map(s=>`<div class="cv-sub">+ ${esc(s)}</div>`).join('')}
    </div></div>`;
  return `<div class="cover" style="${v}">
    ${ph(t,2,'Фото обложки','left:0;right:0;top:0;height:72cqw')}
    <div style="position:absolute;left:5cqw;right:5cqw;top:76cqw;display:flex;flex-direction:column;gap:2.2cqw">
      <div style="display:flex;justify-content:space-between;align-items:end;gap:3cqw">
        <div class="mast" style="font-size:${mfs(t,16,64)}cqw">${esc(t.mast)}</div>
        <div class="cv-issue" style="text-align:right">${esc(t.issue)}</div>
      </div>
      <div style="height:.5cqw;background:currentColor"></div>
      <div class="cv-head" style="font-size:6.8cqw">${esc(t.head)}</div>
      ${t.subs.map(s=>`<div class="cv-sub">• ${esc(s)}</div>`).join('')}
    </div></div>`;
}

/* inner pages: 0 cover, 1 contents, 2 article, 3-4 photo story, 5 interview, 6 article 2, 7 back */
const BODY=[
 'Здесь будет ваша история. В Canva достаточно кликнуть по этому абзацу и написать свой текст: вспомните, как всё начиналось, смешные случаи и моменты, которые знают только свои.',
 'Текст сам перетекает в следующую колонку, а буквица в начале остаётся на месте. Если рассказ получится длиннее, просто продублируйте страницу.',
 'Подписи к фото, цитаты и заголовки уже оформлены. Шрифты и цвета можно поменять в один клик, и они обновятся во всём журнале.',
 'Фотографии вставляются перетаскиванием в готовые рамки. Подойдут снимки с телефона: для печати на A4 хватает обычного качества камеры.'
];
/* Сколько страниц листать: у шаблона с картинками — сколько картинок в pageImgs, у демо — 8 */
const pageCount=t=>t.pageImgs&&t.pageImgs.length?t.pageImgs.length:8;
const pageLabel=(t,i)=>t.pageImgs?(i===0?'Обложка':`Страница ${i+1}`):PAGE_LABELS[i];
const PAGE_LABELS=['Обложка','Содержание','Статья','Фотоистория','Фотоистория','Интервью','Статья','Задняя обложка'];
function folio(t,n){return `<div class="folio"><span>${esc(t.mast)}</span><span>${n}</span></div>`}
function page(t,i){
  const v=vars(t);
  if(t.pageImgs&&t.pageImgs[i]) return `<div class="page"><img loading="lazy" decoding="async" src="${t.pageImgs[i]}" alt="«${esc(t.name)}», страница ${i+1}"></div>`;
  if(i===0) return cover(t);
  if(i===1) return `<div class="page" style="${v}"><div class="pg-in">
    <div class="kick">${esc(t.issue)}</div><h2 class="pg-title">Содержание</h2>
    ${ph(t,3,'Фото',REL+'40cqw')}
    <div class="toc">${t.toc.map((r,k)=>`<div><b>${String(k*2+3).padStart(2,'0')}</b><div><strong>${esc(r[0])}</strong><span>${esc(r[1])}</span></div></div>`).join('')}</div>
    </div>${folio(t,2)}</div>`;
  if(i===2||i===6){const r=t.toc[i===2?0:2];return `<div class="page" style="${v}"><div class="pg-in">
    <div class="kick">${esc(r[0])}</div><h2 class="pg-title" style="font-size:${i===2?8:7}cqw">${esc(i===2?t.head:r[1])}</h2>
    <div class="lead">${esc(i===2?r[1]:t.subs[1])}. Лид-абзац коротко пересказывает статью и цепляет читателя.</div>
    ${i===6?ph(t,4,'Фото 04',REL+'34cqw'):''}
    <div class="cols">${BODY.slice(0,i===2?4:2).map(p=>`<p>${p}</p>`).join('')}</div>
    </div>${folio(t,i+1)}</div>`}
  if(i===3) return `<div class="page" style="${v}">${ph(t,1,'Фото 02 · на полосу','inset:0')}
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.55))"></div>
    <div style="position:absolute;left:6cqw;bottom:10cqw;right:20cqw;color:#fff"><div class="kick" style="color:#fff">Фотоистория</div><div class="pg-title" style="font-size:8cqw;margin-top:2cqw">${esc(t.toc[1][0])}</div></div>
    <div class="folio" style="color:#fff"><span>${esc(t.mast)}</span><span>4</span></div></div>`;
  if(i===4) return `<div class="page" style="${v}"><div class="pg-in">
    ${ph(t,2,'Фото 03',REL+'64cqw')}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3cqw">${ph(t,4,'Фото',REL+'32cqw')}${ph(t,0,'Фото',REL+'32cqw')}</div>
    <div class="lead" style="font-size:2.8cqw">${esc(t.toc[1][1])}. Подписи к фотографиям набраны мелко и не спорят с изображением.</div>
    </div>${folio(t,5)}</div>`;
  if(i===5) return `<div class="page" style="${v}"><div class="pg-in">
    <div class="kick">Интервью</div><div class="quote">«${esc(t.q)}»</div>
    <div style="display:grid;grid-template-columns:24cqw 1fr;gap:4cqw;align-items:start">
      ${ph(t,3,'Портрет','position:relative;height:32cqw;border-radius:50% 50% 1cqw 1cqw')}
      <div class="qa"><b>— Каким был для тебя этот год?</b>Здесь ответ героя журнала. Можно заранее задать вопросы и вписать настоящие ответы, получится живо и смешно.<b>— О чём ты мечтаешь?</b>Второй вопрос и ответ. Вопросы выделены жирным, поэтому интервью легко читать.</div>
    </div></div>${folio(t,6)}</div>`;
  return `<div class="cover" style="${v}"><div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4cqw;padding:10cqw;text-align:center">
    <div class="mast" style="font-size:${mfs(t,18,84)}cqw;color:${t.acc}">${esc(t.mast)}</div>
    <div class="cv-sub" style="opacity:.8;max-width:60cqw">Место для финального поздравления и подписей всех, кто делал этот журнал</div>
    </div><div class="barcode"></div></div>`;
}
function fixStyles(h){return h}

/* ===== catalog ===== */
let state={cat:'all',q:'',sort:'pop'};
let cart=new Set(),fav=new Set();
try{fav=new Set(JSON.parse(localStorage.getItem('rz-fav')||'[]'))}catch(e){}
const byId=id=>ALL.find(x=>x.id===id);

function renderChips(){
  $('#chips').innerHTML=CATS.map(([k,n])=>`<button class="chip" data-cat="${k}" aria-pressed="${state.cat===k}">${n}</button>`).join('');
}
function list(){
  let l=ALL.filter(t=>state.cat==='all'||t.cat===state.cat);
  if(state.q){const q=state.q.toLowerCase();l=l.filter(t=>(t.name+' '+t.catName+' '+(t.head||'')+' '+t.desc).toLowerCase().includes(q))}
  l.sort((a,b)=>state.sort==='cheap'?a.price-b.price:state.sort==='exp'?b.price-a.price:(b.isSet?0:1)-(a.isSet?0:1)||b.pop-a.pop);
  return l;
}
function art(t){return t.isSet?`<div class="duo">${t.items.map(id=>cover(byId(id))).join('')}</div>`:cover(t)}
/* Фон блока: если у шаблона есть bgImg — берём картинку, иначе нежная заглушка из цветов обложки */
function showBg(t){
  const base=t.isSet?byId(t.items[0]):t;
  if(t.bgImg) return `url('${t.bgImg}')`;
  return `radial-gradient(60% 70% at 50% 38%, #ffffffcc, transparent 70%), linear-gradient(160deg, color-mix(in srgb, ${base.acc||'#B25D74'} 12%, #FDF1F3), color-mix(in srgb, ${base.acc||'#B25D74'} 22%, #F6DCE2))`;
}
function renderGrid(){
  const l=list();
  $('#count').textContent=`${l.length} ${l.length===1?'шаблон':l.length<5?'шаблона':'шаблонов'}`;
  $('#grid').innerHTML=l.length?l.map(t=>`<article class="show" style="--show-bg:${showBg(t)}">
    ${t.tag?`<span class="tag">${t.tag}</span>`:''}
    <button class="card ${t.isSet?'is-set':''}" data-open="${t.id}" aria-label="${esc(t.name)}, ${rub(t.price)}">
      <div class="frame">${art(t)}<div class="peek"><span>Посмотреть журнал</span></div></div>
    </button>
    <div class="show-meta"><h3>${esc(t.name)}</h3><p>${t.catName} · ${t.pages} стр.</p></div>
    <div class="show-buy"><div class="price">${rub(t.price)}${t.old?`<s>${rub(t.old)}</s>`:''}</div><button class="btn" data-cart="${t.id}">В корзину</button></div>
  </article>`).join('')
    :`<div class="empty">Ничего не нашлось. Попробуйте другой запрос или категорию.</div>`;
}
function renderFan(){$('#fan').innerHTML=['love','imen','bestie'].map(id=>cover(byId(id))).join('')}
function renderGallery(){
  const ex=[['bestie',[1,2],'For Bestie · содержание и календарь'],['bestie',[11,12],'For Bestie · год в фото'],['bestie',[17,18],'For Bestie · плейлист'],['bestie',[29,30],'For Bestie · ваши моменты']];
  $('#gallery').innerHTML=ex.map(([id,p,l])=>{const t=byId(id);return `<button data-read="${id}" data-page="${p[0]}"><div class="pair">${p.map(i=>page(t,i)).join('')}</div><span>${l}</span></button>`}).join('');
}

/* ===== product sheet ===== */
function openSheet(id){
  const t=byId(id); if(!t) return;
  const parts=t.isSet?t.items.map(byId):[t];
  const w=$('#sheetWrap');
  w.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(t.name)}" style="--show-bg:${showBg(t)}">
    <button class="close" data-close aria-label="Закрыть"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <div class="vis">
      ${t.isSet?`<div style="width:min(340px,100%)">${art(t)}</div>`:cover(t)}
      ${t.isSet?'':`<div class="thumbs">${[1,2,3,5,6].filter(i=>i<pageCount(t)).map(i=>`<button data-read="${t.id}" data-page="${i}" aria-label="Открыть страницу ${i+1}">${page(t,i)}</button>`).join('')}</div>`}
      ${parts.map(p=>`<button class="btn" data-read="${p.id}" data-page="0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>
        Листать${t.isSet?` «${esc(p.name)}»`:' журнал'}</button>`).join('')}
    </div>
    <div class="info">
      <div class="eyebrow">${t.catName}</div>
      <h2>${t.isSet?'Набор':'Журнал'} <em>«${esc(t.name)}»</em></h2>
      <div class="big">${rub(t.price)}${t.old?`<s>${rub(t.old)}</s>`:''}</div>
      <p class="desc">${esc(t.desc)}</p>
      ${t.isSet?`<p class="desc" style="margin-top:-8px">В наборе: ${parts.map(p=>`«${esc(p.name)}» (${p.pages} стр.)`).join(' и ')}.</p>`:''}
      <h3 class="sec-title">Что вы получаете</h3>
      <ul class="incl">
        <li>${t.isSet?'Два шаблона':`Шаблон журнала на ${t.pages} страниц`} в Canva</li>
        <li>Готовые места под ваши фото и тексты</li>
        <li>Инструкцию: как отредактировать и где распечатать</li>
        <li>Доступ к шаблону навсегда</li>
      </ul>
      <h3 class="sec-title">Как это работает</h3>
      <ol class="steps"><li>Оплачиваете заказ на сайте</li><li>Получаете на почту ссылку на шаблон</li><li>Меняете фото и тексты в Canva</li><li>Скачиваете PDF и печатаете</li></ol>
      <div class="note"><b>Важно знать</b><span>Это цифровой товар, печать не входит в стоимость.</span><span>Для редактирования нужен аккаунт Canva, подойдёт бесплатный.</span><span>Шаблон для личного использования, перепродавать его нельзя.</span></div>
      <div class="buy" id="buyRow">
        <div class="btns" style="margin-left:0;width:100%">
          <button class="btn ghost" data-fav="${t.id}" aria-pressed="${fav.has(t.id)}">${fav.has(t.id)?'В избранном':'В избранное'}</button>
          <button class="btn ghost" data-cart="${t.id}">В корзину</button>
          ${t.buyUrl?`<a class="btn" href="${t.buyUrl}" target="_blank" rel="noopener" style="margin-left:auto;text-decoration:none">Купить за ${rub(t.price)}</a>`:`<button class="btn" data-buy="${t.id}" style="margin-left:auto">Купить за ${rub(t.price)}</button>`}
        </div>
      </div>
      <form class="order" id="orderForm" hidden novalidate>
        <h3 class="sec-title">Оформление заказа</h3>
        <label for="oName">Ваше имя<input type="text" id="oName" required autocomplete="name" placeholder="Анна"></label>
        <label for="oMail">Почта для ссылки на шаблон<input type="email" id="oMail" required autocomplete="email" placeholder="anna@mail.ru"></label>
        <label class="agree" for="oAgree"><input type="checkbox" id="oAgree" required>Соглашаюсь с публичной офертой и политикой конфиденциальности</label>
        <span id="oErr" style="color:#B3263F;font-size:13px;text-transform:none;letter-spacing:0" hidden></span>
        <button class="btn" type="submit" style="justify-content:center">Перейти к оплате · ${rub(t.price)}</button>
      </form>
    </div></div>`;
  w.hidden=false; document.body.style.overflow='hidden';
  w.querySelector('.close').focus();
  const f=w.querySelector('#orderForm');
  f.addEventListener('submit',e=>{e.preventDefault();
    const err=f.querySelector('#oErr');
    const msg=!f.oName.value.trim()?'Укажите имя.':!/^\S+@\S+\.\S+$/.test(f.oMail.value)?'Проверьте адрес почты: на него придёт ссылка на шаблон.':!f.oAgree.checked?'Отметьте согласие с офертой.':'';
    err.textContent=msg; err.hidden=!msg; if(msg) return;
    toast('Оплата пока не подключена. Форма работает как макет.');
  });
}
function closeSheet(){$('#sheetWrap').hidden=true;if($('#reader').hidden)document.body.style.overflow=''}

/* ===== reader ===== */
let R={t:null,s:0};
/* Развороты: обложка одна, дальше по две страницы, последняя страница одна */
const spreads=(t=R.t)=>{const n=t?pageCount(t):8;const all=[...Array(n).keys()];if(innerWidth<640)return all.map(i=>[i]);const sp=[[0]];for(let i=1;i<n;i+=2)sp.push(i+1<n?[i,i+1]:[i]);return sp};
function openReader(id,p){
  R.t=byId(id); const sp=spreads(R.t);
  R.s=Math.max(0,sp.findIndex(s=>s.includes(+p||0)));
  $('#reader').hidden=false; document.body.style.overflow='hidden'; renderReader();
}
function renderReader(){
  const t=R.t,sp=spreads(); R.s=Math.min(R.s,sp.length-1); const cur=sp[R.s];
  $('#reader').innerHTML=`
    <div class="r-top">
      <button class="r-btn" data-rclose>← Назад</button>
      <b>${esc(t.name)}</b><span>${t.catName}${t.pageImgs?` · ${pageCount(t)} стр.`:" · демо-версия"}</span>
      <div class="sp"></div>
      <span class="r-price">${rub(t.price)}</span>
      <button class="r-btn pri" data-cart="${t.id}">${t.price===0?'Скачать':'В корзину'}</button>
    </div>
    <div class="r-stage">
      <button class="nav-arrow" data-step="-1" ${R.s===0?'disabled':''} aria-label="Предыдущий разворот"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg></button>
      <div class="spread ${cur.length===1?'single':''}" id="spread">${cur.map(i=>`<div>${fixStyles(page(t,i))}</div>`).join('')}</div>
      <button class="nav-arrow" data-step="1" ${R.s===sp.length-1?'disabled':''} aria-label="Следующий разворот"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 5l7 7-7 7"/></svg></button>
    </div>
    <div class="r-strip">
      <button class="r-btn" data-step="-1" ${R.s===0?'disabled':''} aria-label="Назад" style="padding:6px 10px">‹</button>
      <div class="r-count" style="align-self:center">${cur.map(i=>i+1).join('–')} / ${pageCount(t)}${t.pageImgs?'':' · демо'}<br><span style="font-size:11px">${pageLabel(t,cur[cur.length-1])}</span></div>
      ${sp.map((s,k)=>`<button data-spread="${k}" aria-current="${k===R.s}" aria-label="Страницы ${s.map(i=>i+1).join(', ')}">${s.map(i=>fixStyles(page(t,i))).join('')}</button>`).join('')}
      <button class="r-btn" data-step="1" ${R.s===sp.length-1?'disabled':''} aria-label="Вперёд" style="padding:6px 10px">›</button>
    </div>`;
}
function step(d){const sp=spreads();const n=R.s+d;if(n<0||n>=sp.length)return;R.s=n;renderReader()}
function closeReader(){$('#reader').hidden=true;if($('#sheetWrap').hidden)document.body.style.overflow=''}

/* ===== misc ===== */
let toastT;
function toast(m){const el=$('#toast');el.textContent=m;el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('show'),2600)}
function badges(){$('#cartN').textContent=cart.size;$('#cartN').dataset.n=cart.size;$('#favN').textContent=fav.size;$('#favN').dataset.n=fav.size}

document.addEventListener('click',e=>{
  if(e.target.id==='sheetWrap'){closeSheet();return}
  const b=e.target.closest('button'); if(!b) return;
  const d=b.dataset;
  if(d.open) openSheet(d.open);
  else if(d.read!==undefined) openReader(d.read,d.page);
  else if(d.close!==undefined) closeSheet();
  else if(d.rclose!==undefined) closeReader();
  else if(d.step) step(+d.step);
  else if(d.spread){R.s=+d.spread;renderReader()}
  else if(d.cat){state.cat=d.cat;renderChips();renderGrid()}
  else if(d.go) $('#'+d.go).scrollIntoView({behavior:'smooth'});
  else if(d.cart){const t=byId(d.cart);cart.add(t.id);badges();toast(`«${t.name}» в корзине. Оформление заказа подключим позже.`)}
  else if(d.buy){const f=$('#orderForm');f.hidden=false;$('#buyRow').hidden=true;f.oName.focus();f.scrollIntoView({behavior:'smooth',block:'nearest'})}
  else if(d.fav){fav.has(d.fav)?fav.delete(d.fav):fav.add(d.fav);try{localStorage.setItem('rz-fav',JSON.stringify([...fav]))}catch(_){}
    b.textContent=fav.has(d.fav)?'В избранном':'В избранное';b.setAttribute('aria-pressed',fav.has(d.fav));badges()}
  else if(d.social) toast(`Ссылку на ${d.social} добавим, когда будет аккаунт.`);
  else if(d.doc) toast(`Страница «${d.doc}» появится позже.`);
  else if(b.id==='cartBtn') toast(cart.size?`В корзине: ${[...cart].map(id=>byId(id).name).join(', ')}. Оформление скоро появится.`:'Корзина пуста');
  else if(b.id==='favBtn') toast(fav.size?`В избранном: ${[...fav].map(id=>byId(id)?.name).filter(Boolean).join(', ')}`:'В избранном пока ничего нет');
  else if(b.id==='logo'||b.id==='toTop') scrollTo({top:0,behavior:'smooth'});
  else if(b.id==='heroRead') openReader('imen',0);
});
$('#q').addEventListener('input',e=>{state.q=e.target.value.trim();renderGrid()});
$('#sort').addEventListener('change',e=>{state.sort=e.target.value;renderGrid()});
document.addEventListener('keydown',e=>{
  if(!$('#reader').hidden){if(e.key==='ArrowRight')step(1);else if(e.key==='ArrowLeft')step(-1);else if(e.key==='Escape')closeReader();return}
  if(!$('#sheetWrap').hidden&&e.key==='Escape')closeSheet();
});
let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(!$('#reader').hidden)renderReader()},150)});
/* swipe in reader */
let sx=null;
$('#reader').addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
$('#reader').addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)step(dx<0?1:-1);sx=null});

renderChips();renderGrid();renderFan();renderGallery();badges();
