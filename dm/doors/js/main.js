$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();
    $("#slider").responsiveSlides({
        pager: false,
        nav: true,
        prevText: "<",
        nextText: ">"
    });

    /*NAVIGATION*/
    $( "#js-nav li" ).has( "ul").addClass('drop');
    $('#js-nav .drop a').click(function(e){
        e.preventDefault();
        $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').children('ul').slideUp('fast');
        $(this).siblings('ul').slideToggle('fast');
    });
    $('html').click(function() {
        $('#js-nav .active').removeClass('active').children('ul').slideUp('fast');
    });
    $('#js-nav').click(function(e){
        e.stopPropagation();
    });

    $('#js-navbtn').click(function(){
        $('#js-nav').slideToggle();
    });
    $(window).resize(function(){
        if($(this).width() > 992) {
            $('#js-nav').show().css('display','flex');
            $('#js-navbtn').hide();
        } else {
            $('#js-nav').css('display','block').hide();
            $('#js-navbtn').show();
        }
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
                'height' : ipwh,
            });
        });
    }
    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });

    /*tabs*/
    function tabs() {
        $('#js-tabs .b-product:not(:first)').hide();
        var button = $('#js-tabBtns a');
        $(button).click(function(e) {
            e.preventDefault();
            if(!($(this).parent('li').hasClass('active'))){
                $('#js-tabs .b-product').hide();
                $('#js-tabBtns .active').removeClass('active');
                $(this).parent('li').addClass('active');
                var clicked = $(this).attr('href');
                $(clicked).fadeIn();
            }
        });
    }
    tabs();

    /*TABLE HOVER EFFECT*/
    $('#t-specs .product-1, ' +
        '#t-specs .product-2, ' +
        '#t-specs .product-3, ' +
        '#t-specs .product-4').hover(function(){
        $('#t-specs .hovered').removeClass('hovered');

        var hovered = $(this).attr('class');
        $("."+hovered).addClass('hovered');
    });
    $('#t-specs').mouseleave(function(){
        $(this).find('.hovered').removeClass('hovered');
    });

    /*CAROUSEL*/
    $('.b-carousel_content').hide();
    $('.b-carousel_header').click(function(){
        if ($(this).hasClass('b-carousel_header-active')) {
            $(this).removeClass('b-carousel_header-active').siblings('.b-carousel_content').slideUp('fast');
        } else {
            $('.b-carousel_header-active').removeClass('b-carousel_header-active');
            $('.b-carousel_content').slideUp('fast');
            $(this).addClass('b-carousel_header-active').siblings('.b-carousel_content').slideDown('fast');
        }
    });

    //Custom form elements
    function setupLabel() {
        if ($('label.check input').length) {
            $('label.check').each(function(){
                $(this).removeClass('c_on');
            });
            $('label.check input:checked').each(function(){
                $(this).parent('label').addClass('c_on');
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
});