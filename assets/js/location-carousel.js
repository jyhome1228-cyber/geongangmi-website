(() => {
  const blocks = Array.from(document.querySelectorAll('[data-location-carousel-block]'));
  if (!blocks.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  blocks.forEach((block) => {
    const carousel = block.querySelector('[data-location-carousel]');
    const track = block.querySelector('[data-location-track]');
    const slides = Array.from(block.querySelectorAll('[data-location-slide]'));
    const prev = block.querySelector('[data-location-prev]');
    const next = block.querySelector('[data-location-next]');
    const current = block.querySelector('[data-location-current]');

    if (!carousel || !track || !slides.length) return;

    let index = 0;
    let timer = null;

    const visibleCount = () => {
      if (window.innerWidth <= 720) return 1;
      if (window.innerWidth <= 980) return 2;
      return 3;
    };

    const maxIndex = () => Math.max(0, slides.length - visibleCount());

    const updateCounter = () => {
      if (current) current.textContent = String(index + 1).padStart(2, '0');
    };

    const goTo = (nextIndex, behavior = 'smooth') => {
      index = Math.min(Math.max(nextIndex, 0), maxIndex());
      const target = slides[index];
      if (!target) return;
      const left = target.offsetLeft - track.offsetLeft;
      carousel.scrollTo({ left, behavior: prefersReducedMotion ? 'auto' : behavior });
      updateCounter();
    };

    const goNext = () => goTo(index >= maxIndex() ? 0 : index + 1);
    const goPrev = () => goTo(index <= 0 ? maxIndex() : index - 1);

    const stopAuto = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    const startAuto = () => {
      stopAuto();
      if (prefersReducedMotion) return;
      timer = window.setInterval(goNext, 4600);
    };

    prev?.addEventListener('click', () => {
      goPrev();
      startAuto();
    });

    next?.addEventListener('click', () => {
      goNext();
      startAuto();
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      }
    });

    ['mouseenter', 'focusin', 'touchstart'].forEach((eventName) => {
      carousel.addEventListener(eventName, stopAuto, { passive: true });
    });

    ['mouseleave', 'focusout', 'touchend'].forEach((eventName) => {
      carousel.addEventListener(eventName, startAuto, { passive: true });
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => goTo(Math.min(index, maxIndex()), 'auto'), 120);
    });

    updateCounter();
    startAuto();
  });
})();
