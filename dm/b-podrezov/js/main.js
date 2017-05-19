jQuery(document).ready(function($){
    function navigation(button, menu) {
        $(button).click(function(e){
            e.preventDefault();
            if ( $(menu).is(':visible')){
                $(menu).slideUp();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $(menu).slideDown();
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


    function menu_nested(menu_id) {
        $(menu_id).find('ul.children').hide();
        $(menu_id).find('.cat-item:has(ul) a').click(function(e){
            e.preventDefault();
            $(this).siblings('.children').slideDown();
            if ( $(this).hasClass('active') ) {
                $(this).siblings('.children').stop().slideUp();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active').siblings('.active').removeClass('active').find('.children').stop().slideUp();
                $(this).siblings('.children').stop().slideDown();
            }
        });
    }

    function setupLabel() {
        if ($('label.radio input').length) {
            $('label.radio').each(function(){
                $(this).removeClass('selected');
            });
            $('label.radio input:checked').each(function(){
                $(this).parent('label').addClass('selected');
            });
        }
    }
    setupLabel();
    $('label.radio').click(function(){
        setupLabel();
    });

    navigation('#nav-toggle','#nav-main');
    navigation('.categ-toggle','#nav-categs');
    //menu_nested('.widget-categories, .site-categories');
    up();
    but_up();
    $(window).scroll(function(){
        but_up();
    });

    $(".b-scrollArea").mCustomScrollbar({
        theme:"my-theme"
    });

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
    tabs();
});