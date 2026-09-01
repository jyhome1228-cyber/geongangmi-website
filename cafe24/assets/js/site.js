(() => {
  const body = document.body;
  const menuButton = document.querySelector('[data-gm-menu-button]');
  const mobileNav = document.querySelector('[data-gm-mobile-nav]');

  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
    mobileNav.hidden = true;
    body.classList.remove('gm-menu-open');
  };

  const openMenu = () => {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', '메뉴 닫기');
    mobileNav.hidden = false;
    body.classList.add('gm-menu-open');
  };

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1080) closeMenu();
    });
  }

  document.querySelectorAll('[data-gm-accordion]').forEach((accordion) => {
    accordion.addEventListener('toggle', () => {
      if (!accordion.open) return;
      const group = accordion.closest('[data-gm-accordion-group]');
      if (!group) return;
      group.querySelectorAll('[data-gm-accordion]').forEach((item) => {
        if (item !== accordion) item.open = false;
      });
    });
  });
})();
