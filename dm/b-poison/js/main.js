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

function navigation(button, menu) {
    $(button).click(function(){
        if ( $(menu).is(':visible')){
            $(menu).slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(menu).slideDown();
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

function categories_button() {
    $('#but-categs').click(function(e){
        e.preventDefault();
        if ( $('#menu-categs').is(':visible')){
            $('#menu-categs').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#menu-categs').slideDown();
        }
    });
}


$(document).ready(function($){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    navigation('#nav-toggle','#nav-main');
    navigation('.categ-toggle','#nav-categs');
    up();
    but_up();
    $(window).scroll(function(){
        but_up();
    });
});