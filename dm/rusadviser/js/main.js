$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();

    // Responsive iframes
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
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });

    /*MAIN NAV*/
    $('#navBtn').click(function(){
        if ( $('#navigation').is(':visible') ){
            $('#navigation').slideUp();
            $(this).removeClass('btn-nav_active');
        } else {
            $(this).addClass('btn-nav_active');
            $('#navigation').slideDown();
        }
    });

    //Custom form elements
    function setupLabel() {
        if ($('.customCheck input').length) {
            $('.customCheck').each(function(){
                $(this).removeClass('c_on');
            });
            $('.customCheck input:checked').each(function(){
                $(this).parent('label').addClass('c_on');
            });
        }
    }
    setupLabel();
    $('.customCheck').click(function(){
        setupLabel();
    });
});