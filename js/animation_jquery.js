$(document).ready(function(){
    var window_height=$(window).height();
    var nav_height=$('.nav').height();
    $(".header,.container_header").css({
        'height':window_height,
    })


    if($(window).width ()>1020){
        $(".services").css({
            'height':window_height-nav_height,
        })
    }

    $(window).scroll(function(){
        if( $(window).scrollTop() >window_height ){
            $('.nav').addClass('fixed_nav');
        }
        else{
            $('.nav').removeClass('fixed_nav');
        }
    })

    if($(window).width ()<768){
        $(".link li").css({
            'height':(window_height-35)/6,

        })
    }
    /////////
    $(window).scroll(function(){
      if($(window).scrollTop() >200){
        $('.toTop').addClass('visible');
      }
      else{
           $('.toTop').removeClass('visible');
      }
  })

  /////////
  $('.toTop').click(function(){
    $('body,html').animate({scrollTop:0},'slow');
  })
    /////////
    $('.project').css({
      'height' : $('.project').width()
    })
          /// scroll animation
    $('.link_about').click(function(){ $("html, body").animate({scrollTop:$('.about').position().top},'slow')  });
    $('.link_education').click(function(){ $("html, body").animate({scrollTop:$('.education').position().top},'slow')  });
    $('.link_services').click(function(){$("html, body").animate({scrollTop:$('.services').position().top},'slow')  });
    $('.link_project').click(function(){   $("html, body").animate({scrollTop:$('.projects').position().top},'slow')  });
    $('.link_contact').click(function(){ $("html, body").animate({scrollTop:$('.contact').position().top},'slow')  });

    /////////////////////////ssss


})

/////
