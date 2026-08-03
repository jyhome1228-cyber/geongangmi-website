const programButtons=[...document.querySelectorAll('[data-program-target]')];
const programPanels=[...document.querySelectorAll('[data-program-panel]')];

const activateProgram=(id,{focus=false}={})=>{
  programButtons.forEach((button)=>{
    const active=button.dataset.programTarget===id;
    button.setAttribute('aria-selected',String(active));
    button.tabIndex=active?0:-1;
    if(active&&focus)button.focus();
  });
  programPanels.forEach((panel)=>{
    panel.hidden=panel.dataset.programPanel!==id;
  });
};

programButtons.forEach((button,index)=>{
  button.addEventListener('click',()=>activateProgram(button.dataset.programTarget));
  button.addEventListener('keydown',(event)=>{
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    let next=index;
    if(event.key==='ArrowDown')next=(index+1)%programButtons.length;
    if(event.key==='ArrowUp')next=(index-1+programButtons.length)%programButtons.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=programButtons.length-1;
    activateProgram(programButtons[next].dataset.programTarget,{focus:true});
  });
});

if(programButtons.length)activateProgram(programButtons.find((button)=>button.getAttribute('aria-selected')==='true')?.dataset.programTarget||programButtons[0].dataset.programTarget);