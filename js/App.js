
let sya_hello_btn = document.querySelectorAll('.say_hello');
let cover = document.querySelector('.cover');
let exit_btn = document.querySelectorAll('.fa-times');
let body = document.querySelector('body');
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
