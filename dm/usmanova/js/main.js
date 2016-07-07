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
        if ( $('#navWrap').is(':visible')){
            $('#navWrap').slideUp(150);
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#navWrap').slideDown(150);
        }
    });    
}

function butUp_appear() {
    $('#but-up').hide();
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() > $(document).height() +200 ) {
           $('#but-up').fadeIn();
       } else {
            $('#but-up').fadeOut();
       }
    });
}
function butUp() {
    $('#but-up').click(function() {
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
    $('.widget_search').clone().prependTo('#navWrap').addClass('visible-xs');
}

function cloneCategories() {
    $('.widget_categs').clone().appendTo('#header').addClass('visible-xs').addClass('widget_categs_expander');
}

function toggleCategories() {
    $('.widget_categs_expander .widget-header').click(function(){
        if ( $('.widget_categs_expander ul').is(':visible')){
            $('.widget_categs_expander ul').slideUp(150);
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('.widget_categs_expander ul').slideDown(150);
        }
    });   
}

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    butUp();
    butUp_appear();
    cloneSearch();
    cloneCategories();
    toggleCategories();
});