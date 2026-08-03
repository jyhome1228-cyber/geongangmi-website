const nav = [
  ['about.html', '건강미', 'about'],
  ['program.html', '프로그램 안내', 'program'],
  ['results.html', '변화 기록', 'results'],
  ['journal.html', '저널', 'journal'],
  ['shop.html', '건강미 셀렉트', 'shop'],
  ['reservation.html', '지점 안내', 'reservation'],
];

const page = document.body.dataset.page;
const desktopLinks = nav
  .map(
    ([href, label, key]) =>
      `<a href="${href}" class="${page === key ? 'active' : ''}">${label}</a>`,
  )
  .join('');
const mobileLinks = nav
  .map(
    ([href, label, key], index) =>
      `<a href="${href}" class="${page === key ? 'active' : ''}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${label}</strong></a>`,
  )
  .join('');

const header = document.querySelector('[data-header]');
if (header) {
  header.innerHTML = `
    <a class="brand" href="index.html" aria-label="건강미 홈">
      <img src="./logo.svg" width="156" height="27" alt="GEONGANGMI SPA & AESTHETIC">
    </a>
    <nav class="main-nav" aria-label="주요 메뉴">${desktopLinks}</nav>
    <div class="header-tools">
      <a class="header-contact" href="reservation.html">카카오 상담</a>
      <a class="header-reservation" href="reservation.html#consultation">첫 상담 예약</a>
      <button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobile-navigation">
        <span></span><span></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobile-navigation" aria-label="모바일 메뉴" hidden>
      <div class="mobile-nav-list">${mobileLinks}</div>
      <div class="mobile-nav-actions">
        <a href="reservation.html">카카오 상담</a>
        <a href="reservation.html#consultation">첫 상담 예약</a>
      </div>
    </nav>`;
}

const footer = document.querySelector('[data-footer]');
if (footer) {
  footer.innerHTML = `
    <a class="brand" href="index.html" aria-label="건강미 홈">
      <img src="./logo.svg" width="156" height="27" alt="GEONGANGMI SPA & AESTHETIC">
    </a>
    <div class="footer-business">
      <p>건강미 Spa&amp;Aesthetic</p>
      <p>대표자 김정민 &nbsp; | &nbsp; 사업자등록번호 418-19-02308</p>
      <p>서울특별시 강남구 선릉로162길 43, 2·3층(청담동)</p>
    </div>
    <div class="footer-links">
      <a href="program.html">프로그램 안내</a>
      <a href="journal.html">저널</a>
      <a href="reservation.html">지점 안내</a>
      <a href="reservation.html#consultation">첫 상담 예약</a>
    </div>
    <small>© 2026 GEONGANGMI. ALL RIGHTS RESERVED.</small>`;
}

const mobileCta = document.querySelector('.mobile-cta');
if (mobileCta) {
  mobileCta.innerHTML = `
    <a href="reservation.html">카카오 상담</a>
    <a href="reservation.html#consultation">첫 상담 예약</a>`;
}

const button = document.querySelector('.menu-button');
const mobile = document.querySelector('.mobile-nav');

const closeMobileMenu = () => {
  if (!button || !mobile) return;
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', '메뉴 열기');
  mobile.hidden = true;
  document.body.classList.remove('menu-open');
};

if (button && mobile) {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    mobile.hidden = isOpen;
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMobileMenu();
  });
}
