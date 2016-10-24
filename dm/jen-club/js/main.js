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
function but_up() {        
    if ( $(window).scrollTop() > 100 ) {
        $("#up").css('opacity',1);
    } else {
        $("#up").css('opacity',0);
    }    
}

function toggleMenu() {
    $('#categ-toggle').click(function(e){
        e.preventDefault();
        if ( $(this).next().is(':visible')){
            $(this).next().slideUp();
        } else {
            $(this).next().slideDown();
        }
    });
}
function cloneSubscribe() {
    $('.widget-subscribe').clone().insertAfter('.article-subscribe').addClass('visible-xs');
}

function menu_nested(menu_id) {    
    $(menu_id).find('.menu-item-has-children a').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-menu').slideDown();
        if ( $(this).parent().hasClass('expanded') ) {
            $(this).siblings('.sub-menu').stop().slideUp();
            $(this).parent().removeClass('expanded');
        } else {
            $(this).parent().addClass('expanded').siblings('.expanded').removeClass('expanded').find('.sub-menu').stop().slideUp();
            $(this).siblings('.sub-menu').stop().slideDown();
        }
    });
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
    menu_nested('.widget_nav_menu ul');
    
});