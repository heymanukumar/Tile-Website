const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const header=$('.site-header'),menu=$('.menu-toggle'),mobile=$('.mobile-nav');
window.addEventListener('scroll',()=>header.classList.toggle('stuck',window.scrollY>120));
menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
$$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%3,2)*80}ms`;observer.observe(el)});
const modal=$('#story-modal'),play=$('#play-story'),close=$('.modal-close');
function openModal(){modal.hidden=false;document.body.classList.add('no-scroll');close.focus()}function closeModal(){modal.hidden=true;document.body.classList.remove('no-scroll');play.focus()}
play.addEventListener('click',openModal);close.addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal()});
$('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();const toast=$('#toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200);e.currentTarget.reset()});
