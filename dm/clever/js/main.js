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
        if ( $('#nav-menu').is(':visible')){
            $('#nav-menu').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#nav-menu').slideDown();
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

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    up();

    $('.image-popup').magnificPopup({
        type:'image'
    });


    $('.b-carousel').slick({      
      slidesToShow: 2,
      slidesToScroll: 2,
      dots:false,
      adaptiveHeight: true,
      prevArrow: '<a type="button" class="slick-prev">&lsaquo;</a>',
      nextArrow: '<a type="button" class="slick-next">&rsaquo;</a>',

      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});