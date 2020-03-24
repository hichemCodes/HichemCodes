
const sya_hello_btn = document.querySelectorAll('.say_hello');
const cover = document.querySelector('.cover');
const exit_btn = document.querySelectorAll('.fa-times');
const body = document.querySelector('body');
// add click event to list of buttons


sya_hello_btn.forEach((element)=>{

    element.addEventListener('click',()=>{

        cover.classList.add('show_cover');
        body.classList.add('stop_scroll');
    
    });
})


/// exit the contact form

exit_btn.forEach((element)=>{
     element.addEventListener('click',()=>{

            cover.classList.remove('show_cover');
            body.classList.remove('stop_scroll');
          
     });
});


//set the higth of the first screen

const first_screen = document.querySelector('.first_screen');

first_screen.style.hight = window.innerHeight+'px';


///  burger animation 

const burger_menu = document.querySelector('.burger_menu');
const pop_up_nav = document.querySelector('.pop_down');
const burger_item = document.querySelectorAll('.burger_menu div');

burger_menu.addEventListener('click',()=>{

    if( (pop_up_nav.className).includes('animate_burger'))
    {
        pop_up_nav.classList.remove('animate_burger');
        pop_up_nav.classList.add('remove_animate');

        // add transform rotate animatio to burger items

        burger_item[0].classList.remove('burger1_animate');
        burger_item[1].classList.remove('burger2_animate');
        burger_item[2].classList.remove('burger3_animate');

        
    }

    else
    {
       
        pop_up_nav.classList.remove('remove_animate');
        pop_up_nav.classList.add('animate_burger');

        // remove transform rotate animatio to burger items

        burger_item[0].classList.add('burger1_animate');
        burger_item[1].classList.add('burger2_animate');
        burger_item[2].classList.add('burger3_animate');
        
    }
        

});
