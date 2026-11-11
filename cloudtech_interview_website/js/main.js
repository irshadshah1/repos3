const menuButton=document.querySelector('.menu');const nav=document.querySelector('.header nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(nav.classList.contains('open')));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
