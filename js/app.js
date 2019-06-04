$(document).ready(function(){
            var width_window=$(window).width();
            var height_window=$(window).height();
        $(".background,.cover").css({
                'height':height_window,
        });
         ///////  go to top of the page whene click scroll top button
     $("#totop,.logo h2").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
     });
            ////////  change the burger in mobile device and show the navbar 
     $(".burger").click(function(){
         $(".link").toggleClass("open_link");
         $(".burger").toggleClass("toggle");

     });
             //////// click button view my prohect in the header cover
             $("#btn").click(function(){
                $("html,body").animate({scrollTop:$('#project_title').position ().top-70},'slow');
           });
         //////  go to page part with clikc the navbar 
           if($(window).width()<768){
               $(".link").children().click(function(){
                    $(".burger").click();
               });

              var width_form= $('form').width();
                $('.form_line,#name,#email,#message').css({
                     'width':width_form-25,
                })
           }
     $(window).scroll(function(){
              
          if($(window).scrollTop() >250){
                 $("#totop").addClass("totop");
          }else{
               $("#totop").removeClass("totop");
          }
        });
        $("#home").click(function(){  
          $('html,body').animate({ scrollTop:0}, 'slow');
         });
         $("#project").click(function(){  
            $('html,body').animate({ scrollTop:$('#project_title').position ().top-70}, 'slow');
           });
            $("#about").click(function(){  
            $('html,body').animate({ scrollTop:$('#text_about').position ().top-70}, 'slow');
           });
            $("#contactme").click(function(){  
            $('html,body').animate({ scrollTop:$('#text_contact').position ().top-70}, 'slow');
           });
              /////////  resize the nav   
           $(window).scroll(function(){
           
           const origin=$(".nav").position().top;
           
             if($(window).scrollTop() >= origin){
                $(".nav").css({
                'position':'fixed',
                'top':'0px'
                 
          });
        }
        else{
           
          $(".nav").css({
                'position':'absolute',
                'top':origin
                 
          });
           
        }
        });
        
            
          
     });
          
     
    
const app =()=>{
    /// variable 
     
     let name=document.querySelector("#name");
     let email=document.querySelector("#email");
     let message=document.querySelector("#message");
     let send=document.querySelector("#send");
     let to_top=document.querySelector(".totop");
           

     name.addEventListener("input",()=>{
              valid();  // call to valid function because to check if all input are valid to active the send button 
              let re=/^[0-9a-zA-Z_.-]+$/;
              if(re.test(String(name.value).toLowerCase())){
                    name.className='';
                    name.classList.toggle("valid");
                }
                else{
                     name.className='';
                    name.classList.toggle("name");
                }});
         //    valid the email ///

     email.addEventListener("input",()=>{
               valid();
               let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(re.test(String(email.value).toLowerCase())){
                        email.className='';
                        email.classList.toggle("valid");
                    }
                    else{
                         email.className='';
                        email.classList.toggle("err");
                    }});
          //    valid the message ///

     message.addEventListener("input",()=>{
                             valid();
                        if(message.value.length <10){
                            message.className='';
                            message.classList.toggle("err");
                        }
                        else{
                             message.className='';
                            message.classList.toggle("valid");
                        }});     
                        
             ///// activ the button when all the input are valid     
             function valid(){   
             if(name.className== 'valid' && email.className=='valid' && message.className=='valid'){
                   send.disabled =false; 
             }      
          else{
                    send.disabled=true;

              }
            }
}
app();
//add  project function
function add_project(url,title,link,array,info){
    let output=`
          <div class="project_item" >
          <img src="${url}" alt="" class="cc">
    <a href='${link}'>        
        <div class='container_information'>
        <div class='information_2'>
        <div class='information_task'>
               
         </div>
         <span >${title}</span>
         <span>${info}</span>
     </div>
        </div>  
           
  </a>      
  </div>`;
    let mydiv=document.querySelector(".project");
    mydiv.innerHTML+=output;
    array.forEach((element) => {
         
          let task= `
         
           <div class='task' id="${element}">
                   ${element}
           </div>
          `;
          document.querySelector(".information_task").innerHTML+=task;

    });
  }     
  //add project 
     let array=['HTML5','CSS3','JAVASCRIPT'];
  add_project('img/capture1.png','Movies search app','https://hichemcodes.github.io/Moviesearch/',array,'by hichem  /  may 5,2019');


 

