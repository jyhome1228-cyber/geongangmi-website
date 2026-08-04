const appendStyle=(href,key)=>{if(document.querySelector(`link[data-site-style="${key}"]`))return;const link=document.createElement('link');link.rel='stylesheet';link.href=href;link.dataset.siteStyle=key;document.head.appendChild(link);};
appendStyle('assets/css/site-v5.css','compact-v5');
appendStyle('assets/css/site-v6.css','quiet-v6');
appendStyle('assets/css/site-v7.css','simple-grid-v7');
appendStyle('assets/css/site-v8.css','typography-v8');
appendStyle('assets/css/site-v9.css','spa-refinement-v9');
appendStyle('assets/css/site-v10.css','listing-v10');
appendStyle('assets/css/site-v11.css','readability-v11');
appendStyle('assets/css/site-v12.css','layout-1440-v12');
appendStyle('assets/css/site-v13.css','alignment-v13');
appendStyle('assets/css/site-v14.css','real-images-v14');
appendStyle('assets/css/site-v15.css','full-bleed-hero-v15');

const nav=[['about.html','건강미','about'],['program.html','프로그램 안내','program'],['results.html','변화 기록','results'],['journal.html','저널','journal'],['shop.html','SHOP','shop'],['reservation.html','지점 안내','reservation']];
const page=document.body.dataset.page;
const desktopLinks=nav.map(([href,label,key])=>`<a href="${href}" class="${page===key?'active':''}">${label}</a>`).join('');
const mobileLinks=nav.map(([href,label,key],i)=>`<a href="${href}" class="${page===key?'active':''}"><span>${String(i+1).padStart(2,'0')}</span><strong>${label}</strong></a>`).join('');

const header=document.querySelector('[data-header]');
if(header){header.innerHTML=`<a class="brand" href="index.html" aria-label="건강미 홈"><img src="./logo.svg" alt="GEONGANGMI SPA & AESTHETIC"></a><nav class="main-nav" aria-label="주요 메뉴">${desktopLinks}</nav><div class="header-tools"><a class="header-contact" href="reservation.html">카카오 상담</a><a class="header-reservation" href="reservation.html#consultation">첫 상담 예약</a><button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobile-navigation"><span></span><span></span></button></div><nav class="mobile-nav" id="mobile-navigation" aria-label="모바일 메뉴" hidden><div class="mobile-nav-list">${mobileLinks}</div><div class="mobile-nav-actions"><a href="reservation.html">카카오 상담</a><a href="reservation.html#consultation">첫 상담 예약</a></div></nav>`;}

const footer=document.querySelector('[data-footer]');
if(footer){footer.innerHTML=`<a class="brand" href="index.html" aria-label="건강미 홈"><img src="./logo.svg" alt="GEONGANGMI SPA & AESTHETIC"></a><div class="footer-business"><p>건강미 Spa&amp;Aesthetic</p><p>대표자 김정민 &nbsp; | &nbsp; 사업자등록번호 418-19-02308</p><p>서울특별시 강남구 선릉로162길 43, 2·3층(청담동)</p></div><div class="footer-links"><a href="about.html">건강미</a><a href="program.html">프로그램 안내</a><a href="results.html">변화 기록</a><a href="journal.html">저널</a><a href="shop.html">SHOP</a><a href="reservation.html">지점 안내</a></div><small>© 2026 GEONGANGMI. ALL RIGHTS RESERVED.</small>`;}

const mobileCta=document.querySelector('.mobile-cta');
if(mobileCta){mobileCta.innerHTML=`<a href="reservation.html">카카오 상담</a><a href="reservation.html#consultation">첫 상담 예약</a>`;}

const button=document.querySelector('.menu-button');
const mobile=document.querySelector('.mobile-nav');
const closeMenu=()=>{if(!button||!mobile)return;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','메뉴 열기');mobile.hidden=true;document.body.classList.remove('menu-open');};
if(button&&mobile){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));button.setAttribute('aria-label',open?'메뉴 열기':'메뉴 닫기');mobile.hidden=open;document.body.classList.toggle('menu-open',!open);});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});window.addEventListener('resize',()=>{if(innerWidth>1080)closeMenu();});}