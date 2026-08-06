(() => {
  const carousel = document.querySelector('[data-location-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('[data-location-track]');
  const slides = Array.from(carousel.querySelectorAll('[data-location-slide]'));
  const prev = document.querySelector('[data-location-prev]');
  const next = document.querySelector('[data-location-next]');
  const current = document.querySelector('[data-location-current]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
})();
