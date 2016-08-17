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

function nav() {    
    $('#nav-open').click(function(){
        $('#nav-section').fadeIn();
        $('#page-wrapper').fadeOut();
        $('html').css('background', '#2db1df');
    });

    $('#nav-close').click(function(){
        $('#nav-section').fadeOut();
        $('#page-wrapper').fadeIn();
        $('html').css('background', '#fff');
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

function tabs() {
    $('.b-tab').hide();
    $('.b-tab:first-child').show();
    $('.tabs-links a').click(function(e) {
        e.preventDefault();
        if ( ! $(this).parent('li').hasClass('active')) {
            $(this).parents('.tabs-links').next().find('.b-tab').hide();            
            $(this).parents('.tabs-links').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var clicked = $(this).attr('href');
            $(clicked).fadeIn('fast');
        }
    });
}

function review() {
    $('.b-rev_i').click(function(){
        $(this).toggleClass('active');
    });
}

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    nav();
    tabs();
    review();


    $('.image-popup').magnificPopup({type:'image'});
    $('.b-gallery, .b-sertifs').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });


    $('.b-gallery').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots:false,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.b-carousel-complects').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots:false,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.potol-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots:false,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      vertical: true
    });

    $('#gallery-prod a').click(function(e){
      e.preventDefault();
      $("#gallery-prod-img").attr( "src", $(this).attr("href") );
    });
});