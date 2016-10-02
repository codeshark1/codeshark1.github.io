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

function toggleMenu() {
    $('#categ-toggle, #geo-toggle').click(function(e){
        e.preventDefault();
        if ( $(this).next().is(':visible')){
            $(this).next().slideUp();
        } else {
            $(this).next().slideDown();
        }
    });
}

function cloneGeo() {
    $('.widget-geography').clone().appendTo('#s-geo');
}
function cloneSearch() {
    $('#searchform').clone().prependTo('#categories').addClass('visible-xs');
}

function height() {
    var contentHeight = $('.site-content').height();
    var sidebarHeight = $('.site-sidebar').height();
    if (contentHeight > sidebarHeight) {
        $('.site-sidebar').height(contentHeight);
    } else if (contentHeight < sidebarHeight) {
        $('.site-content').height(sidebarHeight);
    }
}

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
    toggleMenu();
    up();
    cloneGeo();
    cloneSearch();    
});