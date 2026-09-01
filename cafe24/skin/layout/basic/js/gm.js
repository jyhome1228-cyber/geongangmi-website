(function(){
  function ready(fn){
    if(document.readyState!=='loading') fn();
    else document.addEventListener('DOMContentLoaded',fn);
  }

  ready(function(){
    var button=document.querySelector('[data-gm-menu-button]');
    var menu=document.querySelector('[data-gm-mobile-nav]');

    function closeMenu(){
      if(!button||!menu) return;
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','메뉴 열기');
      menu.hidden=true;
      document.body.classList.remove('gm-menu-open');
    }

    if(button&&menu){
      button.addEventListener('click',function(){
        var open=button.getAttribute('aria-expanded')==='true';
        button.setAttribute('aria-expanded',String(!open));
        button.setAttribute('aria-label',open?'메뉴 열기':'메뉴 닫기');
        menu.hidden=open;
        document.body.classList.toggle('gm-menu-open',!open);
      });
      menu.querySelectorAll('a').forEach(function(link){link.addEventListener('click',closeMenu);});
      window.addEventListener('resize',function(){if(window.innerWidth>980) closeMenu();});
      document.addEventListener('keydown',function(e){if(e.key==='Escape') closeMenu();});
    }

    document.querySelectorAll('[data-gm-accordion]').forEach(function(group){
      group.querySelectorAll('button[aria-controls]').forEach(function(trigger){
        trigger.addEventListener('click',function(){
          var panel=document.getElementById(trigger.getAttribute('aria-controls'));
          if(!panel) return;
          var open=trigger.getAttribute('aria-expanded')==='true';
          trigger.setAttribute('aria-expanded',String(!open));
          panel.hidden=open;
        });
      });
    });
  });
})();