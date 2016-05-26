$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();
    $( '#navigation li:has(ul)' ).doubleTapToGo();

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

    /*CATALOG*/
    $('.b-company-collapse').click(function(){
        if( ($(this).parents('.b-company').find('.b-company_i').is(':visible')) ){
            $(this).parents('.b-company').find('.b-company_i').slideUp();
            $(this).parents('.b-company').find('.b-company-collapse-arr').addClass('b-company-collapse-arr_closed');
            $(this).text('Развернуть описание');
        } else {
            $(this).parents('.b-company').find('.b-company_i').slideDown();
            $(this).parents('.b-company').find('.b-company-collapse-arr').removeClass('b-company-collapse-arr_closed');
            $(this).text('Свернуть описание');
        }
    });
    $('.b-company-collapse-arr').click(function(){
        if( ($(this).parents('.b-company').find('.b-company_i').is(':visible')) ){
            $(this).parents('.b-company').find('.b-company_i').slideUp();
            $(this).addClass('b-company-collapse-arr_closed');
            $(this).parents('.b-company').find('.b-company-collapse').text('Развернуть описание');
        } else {
            $(this).parents('.b-company').find('.b-company_i').slideDown();
            $(this).parents('.b-company').find('.b-company-collapse').text('Свернуть описание');
            $(this).removeClass('b-company-collapse-arr_closed');
        }
    });
    $('#js-companyCollapse').click(function(){
        if (($('.b-company_i').is(':visible'))){
            $('.b-company_i').slideUp();
            $('.b-company-collapse').text('Развернуть описание');
            $('.b-company-collapse-arr').addClass('b-company-collapse-arr_closed');
            $(this).text('Развернуть все');
        } else {
            $('.b-company_i').slideDown();
            $('.b-company-collapse').text('Свернуть описание');
            $('.b-company-collapse-arr').removeClass('b-company-collapse-arr_closed');
            $(this).text('Свернуть все');
        }
    });

    /*TABS [INDEX PAGE]*/
    $('#tabDrop-contents a').click(function(){
        $(this).parents('.dropdown-menu').siblings('.dropdown-toggle').children('span').text($(this).text());
    });

    var $mobTabNav = $('#js-tabs-mob');
    $($mobTabNav).hide();
    $('#js-tabs_mob-ttl').click(function(){
        $($mobTabNav).slideToggle();
    });
    $($mobTabNav).find('a').click(function(){
        $('#js-tabs_mob-ttl span').text($(this).text());
        $($mobTabNav).slideUp('fast');
    });
});