// Controles básicos: tamaño de fuente, tema y TOC
(function(){
  const toc = document.getElementById('toc');
  const root = document.documentElement;

  const inc = document.getElementById('increase-font');
  const dec = document.getElementById('decrease-font');
  const tog = document.getElementById('toggle-theme');
  const tocToggle = document.getElementById('toc-toggle');

  inc && inc.addEventListener('click', ()=> {
    const s = parseInt(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
    root.style.setProperty('--font-size', (s+2)+'px');
  });
  dec && dec.addEventListener('click', ()=> {
    const s = parseInt(getComputedStyle(root).getPropertyValue('--font-size')) || 18;
    root.style.setProperty('--font-size', Math.max(12,s-2)+'px');
  });
  tog && tog.addEventListener('click', ()=> {
    if(root.hasAttribute('data-theme')) root.removeAttribute('data-theme');
    else root.setAttribute('data-theme','dark');
  });
  tocToggle && tocToggle.addEventListener('click', ()=> toc.classList.toggle('open'));
})();
