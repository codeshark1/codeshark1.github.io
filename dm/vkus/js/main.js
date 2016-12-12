function responsiveIframe() {
    $('iframe').each(function(){
        var iw = $(this).width();
        var ih = $(this).height();
        var ip = $(this).parent().width();
        var ipw = ip/iw;
        var ipwh = Math.round(ih*ipw);
        $(this).css({
            'width': ip,
            'height' : ipwh
        });
    });
}

function mainNav() {    
    $('#nav-toggle').click(function(){
        if ( $('#nav-main').is(':visible')){
            $('#nav-main').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#nav-main').slideDown();
        }
    });
}

function mav_main() {
  function menu_close() {
    $('#nav-main .active').removeClass('active').siblings('.sub-menu-wrap, .sub-menu').slideUp(200);
  }

  $('#nav-main a, #nav-main .sub-menu-wrap').click(function(e){
    e.stopPropagation();
  });

  $('#nav-main > .menu-item-has-children > a').click(function(e){
      e.preventDefault();
      if( $(this).siblings('.sub-menu-wrap').is(':visible') ) {
        $(this).removeClass('active').siblings('.sub-menu-wrap').slideUp(200);
      } else {        
        $(this).addClass('active').siblings('.sub-menu-wrap').slideDown(200);
      }    
  });

  $('#nav-main .b-group > .menu-item-has-children > a').click(function(e){
      if ($(window).width() < 768 ) {
        e.preventDefault();
        if( $(this).siblings('.sub-menu').is(':visible') ) {
          $(this).removeClass('active').siblings('.sub-menu').slideUp(200);
        } else {        
          $(this).parents('.sub-menu-wrap').find('.active').removeClass('active').siblings('.sub-menu').slideUp(200);
          $(this).addClass('active').siblings('.sub-menu').slideDown(200);
        }
    }
  });

  $('body').click(function(){
    if ($(window).width() > 768 ) {
      menu_close();
    }
  });
}

function up() {
    $('#up').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });    
}
function but_up() {        
    if ( $(window).scrollTop() > 100 ) {
        $("#up").css('opacity',0.8);
    } else {
        $("#up").css('opacity',0);
    }    
}





$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    up(); 
    but_up();
    mav_main();
    $('#slider').slick({
      dots: true,
      prevArrow: "<button type='button' class='slick-prev'>&lsaquo;</button>",
      nextArrow: "<button type='button' class='slick-next'>&rsaquo;</button>"
    });
    $(window).scroll(function() {
        but_up();        
    });    
});