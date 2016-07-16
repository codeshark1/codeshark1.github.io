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
        if ( $(this).hasClass('active')){
            $('#sidemenu').css('left',-250);
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#sidemenu').css('left',0);
        }
    });    
}

$(document).ready(function(){
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    mainNav();
   
   $('.b-gallery a').magnificPopup({
      type: 'image',
      gallery:{enabled:true},
      zoom: {enabled: true}
    });
});