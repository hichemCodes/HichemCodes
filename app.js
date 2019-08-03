
const burger = document.querySelector('.burger');
const link =  document.querySelector('.link');

burger.addEventListener('click',()=>{
     link.classList.toggle('open');
    burger.classList.toggle('toggle')
})

