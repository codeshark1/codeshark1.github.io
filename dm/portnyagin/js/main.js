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

function cloneSearch() {
    $('#form-search').clone().prependTo('#siteControls');
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
    cloneSearch();
    up();

    $('.b-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows:false,
      autoplay:true
    });

    $('._b-newsrow').slick({      
      infinite: true,
      speed: 500,
      cssEase: 'linear',
      arrows:false,
       slidesToScroll: 2,
       slidesToShow:1,
       autoplay:true,
       centerMode: true,
       variableWidth: true,

      /*responsive: [
        {
          breakpoint: 1500,
          settings: {slidesToShow: 5}
        },
        {
          breakpoint: 1024,
          settings: {slidesToShow: 3}
        },
        {
          breakpoint: 600,
          settings: {slidesToShow: 2}
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]*/
    });
});