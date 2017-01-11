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
function categories() {
    var categ_menu = $('#categories');
    $(categ_menu).find('.widget-header').click(function(){
        if ( $(this).next('ul').is(':visible')){
            $(this).next('ul').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).next('ul').slideDown();
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

function clone_categs() {
    $('.widget_categories').clone().prependTo('#main').removeClass('hidden-xs').addClass('visible-xs').removeClass('widget').attr('id', 'categories').find('ul').hide();
}

function sbarHeight() {
    if ( $('.site-sidebar').height() < $('.site-content').height() ) {
        $('.site-sidebar').height($('.site-content').height());        
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
    clone_categs();
    categories();
    if( $(window).width() >= 768 ) {
        sbarHeight();        
    }
    $(window).resize(function() {
        if( $(window).width() >= 768 ) {
            sbarHeight();        
        } else {
            $('.site-sidebar').height('auto');
        }
    });        
    $(window).scroll(function() {
        but_up();        
    });    
});