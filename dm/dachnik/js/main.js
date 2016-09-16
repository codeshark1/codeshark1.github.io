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
        if ( $('#b-nav-search').is(':visible')){
            $('#b-nav-search').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#b-nav-search').slideDown();
        }
    });    
}

function categsNav() {    
    $('#but-categs').click(function(){
        if ( $('#b-categs-list').is(':visible')){
            $('#b-categs-list').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#b-categs-list').slideDown();
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

function cloneSearch() {
    $('#search-form').clone().prependTo('#b-nav-search');
}

function moveSubscribe() {
    var subscribe = $('#subscribe-home');
    if ( ($(window).width() >= 768) && ($(window).width() <= 991) ) {
        subscribe.insertAfter('.post-preview:nth-child(1)');
    } else if ( $(window).width() >= 992 ) {
        subscribe.insertAfter('.post-preview:nth-child(2)');
    } else if ( $(window).width() <= 767 ) {
        subscribe.appendTo('#subscribe-holder');   
    }
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

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    categsNav();
    cloneSearch();
    up();
    moveSubscribe();
    $(window).resize(function(){
        moveSubscribe();
    });
    tabs();
});