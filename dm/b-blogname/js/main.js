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

function menu_nested(menu_id) {
    $(menu_id).find('ul').hide();
    $("<i></i>").appendTo( $(menu_id).find('.menu-item-has-children > a') );
    
    $(menu_id).find('.menu-item-has-children > a').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-menu').slideDown(150);
        if ( $(this).parent().hasClass('open') ) {
            $(this).siblings('.sub-menu').stop().slideUp(150);
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open').siblings('.open').removeClass('open').find('.sub-menu').stop().slideUp(150);
            $(this).siblings('.sub-menu').stop().slideDown(150);
        }
    });

    $('body').click(function(){
        $(menu_id).find('.sub-menu').slideUp(150).parent('li').removeClass('open');
    });
    $(menu_id).click(function(e){
        e.stopPropagation();
    });
}

$(document).ready(function($){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    up(); 
    but_up();
    categories_button();
    menu_nested('#menu-categs');
    $(window).scroll(function() {
        but_up();        
    });    
});