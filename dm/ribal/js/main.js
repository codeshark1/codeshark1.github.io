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
        $("#up").css('opacity',1);
    } else {
        $("#up").css('opacity',0);
    }    
}

function toggleMenu() {
    $('#categs-toggle').click(function(e){
        e.preventDefault();
        if ( $(this).next().is(':visible')){
            $(this).next().slideUp();
        } else {
            $(this).next().slideDown();
        }
    });
}
function cloneSubscribe() {
    $('.widget-subscribe').clone().insertAfter('.b-art-subscribe').addClass('visible-xs');
}




$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    toggleMenu();
    up();
    cloneSubscribe();    
    but_up();
    $(window).scroll(function() {
        but_up();        
    });    
});