$(document).ready(function(){
    var window_height=$(window).height();
    var nav_height=$('.nav').height();
    $(".header,.container_header").css({
        'height':window_height,
    })

    
    if($('window').width ()>1020){
        $(".services").css({
            'height':window_height-nav_height-40,
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

    if($('window').width ()<768){
        $(".link li").css({
            'height':(window_height-35)/6,
            
        })
    }
    
})
