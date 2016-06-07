function tabs() {
    $('.b-tabs-tab:not(:first)').hide();    
    $('.b-tabs-btns a').click(function(e) {
        e.preventDefault();
        if ( ! $(this).parent().hasClass('active')) {
            $('.b-tabs-tab').hide();
            $('.b-tabs-btns .active').removeClass('active');
            $(this).parent().addClass('active');
            var clicked = $(this).attr('href');
            $(clicked).fadeIn('fast');
        }
    });
}
function respNav() {
    $('#nav-toggle').click(function(){
        if ( $('#nav-menu').is(':visible') ){
            $('#nav-menu').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#nav-menu').slideDown();
        }
    });    
}
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

function smoothScroll() {
    $("#up").click(function() {
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

function cloneSocial() {
    $('.widget-social').clone().insertAfter('#core').addClass('widget-social_clone').removeClass('.hidden-xs');
}

$(document).ready(function(){    
    $('input, textarea').placeholder();
    $('.b-carousel').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<span class='prevArr'>&#706;</span>",
        nextArrow: "<span class='nextArr'>&#707;</span>",
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }            
        }]
    });

    tabs();
    respNav();
    smoothScroll();
    responsiveIframe();
    cloneSocial();
    $(window).resize(function(){
        responsiveIframe();
    });
});