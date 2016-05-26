$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();
    $( '#navigation li:has(ul)').addClass('children').doubleTapToGo();
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav:false
    });
    $('.popup-img').magnificPopup({
        type: 'image',
        zoom: {enabled: true}
    });
    $('.popup-img-lnk').magnificPopup({
        type: 'image'
    });
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false

    });


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
    $('#nav-toggle').click(function(){
        if ( $('#navigation').is(':visible') ){
            $('#navigation').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#navigation').slideDown();
        }
    });

    /*checkboxes*/
    function setupLabel() {
        if ($('label.check input').length) {
            $('label.check').each(function(){
                $(this).removeClass('c_on');
            });
            $('label.check input:checked').each(function(){
                $(this).parent('label').addClass('c_on');
            });
            $('label.check input:disabled').each(function(){
                $(this).parent('label').addClass('c_dis');
            });
        }
        if ($('label.radio input').length) {
            $('label.radio').each(function(){
                $(this).removeClass('r_on');
            });
            $('label.radio input:checked').each(function(){
                $(this).parent('label').addClass('r_on');
            });
        }
    }
    setupLabel();
    $('label.check, label.radio').click(function(){
        setupLabel();
    });

    $('#map-close').click(function () {
        $('#map-overlay').fadeOut();
    });

    /*tabs*/
    $('.but-tab').click(function(e){
        e.preventDefault();
        var data = $(this).data("tab");
        $('.but-tab').removeClass('active');
        $(this).addClass('active');
        switch(data){
            case 'doc':
                $('.b-reviews_itm').fadeOut();
                $('.b-reviews_doc').fadeIn();
                break;
            case 'vid':
                $('.b-reviews_itm').fadeOut();
                $('.b-reviews_vid').fadeIn();
                break;
            case 'all':
                $('.b-reviews_itm').fadeIn();
        }
    });

    /*hover stuff*/
    var $sitesTypes = $("#sites-types, #list-seo-effect, #list-smo-networks");
    function leaveFirstItem() {
        $sitesTypes.children('.item').removeClass('active').find('.info').hide();
        $sitesTypes.children('.item:first-child').addClass('active').find('.info').show();
    }
    if ($(window).width() > 750 ) {
        leaveFirstItem();
    }
    $(window).resize(function(){
        if ($(window).width() < 750 ) {
            $sitesTypes.find('.info').show();
            $sitesTypes.children('.item').removeClass('active');
        } else {
            leaveFirstItem();
        }
    });
    $sitesTypes.children('.item').mouseenter(function(){
        if ($(window).width() > 750 ) {
            if( ! $(this).hasClass('active') ) {
                $(this).siblings().removeClass('active').find('.info').fadeOut('fast');
                $(this).addClass('active').find('.info').fadeIn('fast');
            }
        }
    });
    $sitesTypes.children('.item').click(function(){
        if ($(window).width() > 750 ) {
            if( ! $(this).hasClass('active') ) {
                $(this).siblings().removeClass('active').find('.info').fadeOut('fast');
                $(this).addClass('active').find('.info').fadeIn('fast');
            }
        }
    });
});