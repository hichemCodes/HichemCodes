$(document).ready(function(){
         ///////  go to top of the page whene click scroll top button
     $("#totop").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
     });
            ////////  chang the burger in mobile device and show the navbar 
     $(".burger").click(function(){
         $(".link").toggleClass("open_link");
         $(".burger").toggleClass("toggle");

     });
             //////// click button view my prohect in the header cover
             $("#btn").click(function(){
                $("html,body").animate({scrollTop:680},'slow');
           });
         //////  go to page part with clikc the navbar 
           if($(window).width()<768){
               $(".link").children().click(function(){
                    $(".burger").click();
               });
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
            $('html,body').animate({ scrollTop:680}, 'slow');
           });
            $("#about").click(function(){  
            $('html,body').animate({ scrollTop:1202}, 'slow');
           });
            $("#contactme").click(function(){  
            $('html,body').animate({ scrollTop:1859}, 'slow');
           });
              /////////  resize the nav   
           $(window).scroll(function(){
            var resize='';
           var origin='';
           if($(window).width()>768){ ////////for mobile devices 
               resize=670;
               origin="670px";
                  }
               else{
                    resize=580;
                       origin="580px";
                   }
             if($(window).scrollTop() >= resize){
                  $(".nav").css({
                   'position' : 'fixed',
                   'top' : '0px',
                   
                });
        }
        else{
           $(".nav").css({
               'position' : 'absolute',
               'top' : origin,
               
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
function add_project(url,title,detail,link){
    let output=`
          <div class="project_item" style="background-image:url('${url}'")>
          <div class="slide">
                <div class="inside">
                <h2>${title}</h2>
                <h4>${detail}</h4>
                <a href="${link}">Visit website</a>
                       </div>
      </div>
  </div>`;
    let mydiv=document.querySelector(".project");
    mydiv.innerHTML+=output;
  }     
  //add project 
  add_project('img/recip1.jpg','Recipe App','HTML CSS3 JS','https://hichemcodes.github.io/Recipe-app/');
  
  


