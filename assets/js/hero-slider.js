const slider=document.querySelector('[data-hero-slider]');
if(slider){
  const slides=[...slider.querySelectorAll('[data-hero-slide]')];
  const dots=[...slider.querySelectorAll('[data-slide-to]')];
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index=0;
  let timer=null;

  const show=(next)=>{
    index=(next+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      const active=i===index;
      slide.classList.toggle('is-active',active);
      slide.setAttribute('aria-hidden',String(!active));
    });
    dots.forEach((dot,i)=>{
      const active=i===index;
      dot.classList.toggle('is-active',active);
      dot.setAttribute('aria-current',active?'true':'false');
    });
  };

  const stop=()=>{if(timer){window.clearInterval(timer);timer=null;}};
  const start=()=>{
    if(reduceMotion||slides.length<2)return;
    stop();
    timer=window.setInterval(()=>show(index+1),6000);
  };

  dots.forEach((dot)=>dot.addEventListener('click',()=>{
    show(Number(dot.dataset.slideTo));
    start();
  }));

  slider.addEventListener('mouseenter',stop);
  slider.addEventListener('mouseleave',start);
  slider.addEventListener('focusin',stop);
  slider.addEventListener('focusout',start);

  show(0);
  start();
}
