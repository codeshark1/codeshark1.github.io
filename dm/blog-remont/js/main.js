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

function menu_mobile() {
    var $panel = $('#nav-panel');

    $('#nav-toggle').click(function(){
        if ( $($panel).is(':visible')){
            $($panel).slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $($panel).slideDown();
        }
    });
}

function menu_mobile_nesting() {
    $('#nav-main .menu-item-has-children > a').click(function(e){
        if($(window).width() < 768) {
            e.preventDefault();
            $(this).siblings('.sub-menu-wrap').slideDown(150);
            if ( $(this).parent().hasClass('open') ) {
                $(this).siblings('.sub-menu-wrap').stop().slideUp(150);
                $(this).parent().removeClass('open');
            } else {
                $(this).parent().addClass('open').siblings('.open').removeClass('open').find('.sub-menu-wrap').stop().slideUp(150);
                $(this).siblings('.sub-menu-wrap').stop().slideDown(150);
            }
        }
    });
}

function masonry_init() {
    if($(window).width() >= 768) {
       $('.b-masonry').masonry({
          itemSelector: '.b-art-prev',
          columnWidth: '.b-art-prev-sm',
          gutter: 20,
          percentPosition: true
        });
    }
}

function menu_desktop() {
    var $panel = $('#nav-panel');

    $($panel).on( "mouseenter", function() {
        if($(window).width() >= 768) {
            $($panel).stop(true,true).animate({'width':265});
            $('#overlay').stop(true,true).fadeIn();
        }
    });

    $('#nav-main .menu-item-has-children').on( "mouseenter", function() {
        if($(window).width() >= 768) {
            $($panel).stop(true,true).animate({'width':470});
        }
    });

    $('#nav-main .menu-item-has-children', $panel).on( "mouseleave", function() {
        if($(window).width() >= 768) {
            $($panel).animate({'width':265});
        }
    });

    $($panel).on( "mouseleave", function() {
        if($(window).width() >= 768) {
            $($panel).stop(true,true).animate({'width':60});
            $('#overlay').stop(true,true).fadeOut();
        }
    });
}

$(document).ready(function($){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    //mainNav();
    masonry_init();
    menu_desktop();
    menu_mobile();
    menu_mobile_nesting()
});

$(window).resize(function(){
   masonry_init();   
});