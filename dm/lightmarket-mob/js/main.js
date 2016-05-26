$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();
    $("#slider").responsiveSlides({pager:true,pause:true});
    var mySVGsToInject = document.querySelectorAll('img.svg-inject');
    var injectorOptions = {evalScripts: 'always'};
    SVGInjector(mySVGsToInject,injectorOptions);

    var $gallery = $('#gallery');
    $gallery.lightGallery({thumbnail:true});


    
    function releaseBody () {
        $('body').css({'overflow':'visible','height':'auto','position':'inherit'}).removeClass('cropped');
    }
    function cropBody () {
        $('body').css({'overflow':'hidden','position':'fixed','width':'100%'}).height($(window).height()).addClass('cropped');
    }
    
    /*-SCREEN-*/
    $('#screen').click(function(){
        hideNav();
        hideFilters();
        releaseBody();
    });

    /**NAVIGATION**/
    var navpanel = $('#navPanel');
    $('#navScroll').niceScroll();

    function hideNav() {
        $('#screen').fadeOut();
        releaseBody();
        if ( ($(window).width()) < 650 ) {
            navpanel.css('left',-250);
        } else {
            navpanel.css('left',-400);
        }
    }
    /*SHOW NAV*/
    $('#navBtn').click(function(){
        $('#screen').fadeIn();        
        cropBody();
        navpanel.css('left',0);
        setTimeout(function () {
            $('#navScroll').getNiceScroll().resize();
        }, 400);
    });
    /*Nav 2nd level*/
    $('#navPanel .nav-lnk').click(function(e){
        if ( ($(this).siblings().length) > 0 ) {
            e.preventDefault();
            $('#navPanel').find('.inside').hide();
            $(this).siblings('.inside').fadeIn();
            $("#navScroll").getNiceScroll(0).doScrollTop(0);
            if ( ($(window).width()) < 650 ) {
                $('.b-nav_wrp').css('margin-left',-250);
                $(this).siblings('.inside').css('left',250);
            } else {
                $('.b-nav_wrp').css('margin-left',-400);
                $(this).siblings('.inside').css('left',400);
            }
        }
    });
    $('#navPanel .heading').click(function() {
        $('.b-nav_wrp').css('margin-left',0);
        $(this).parents('.inside').fadeOut('fast').css('left',0);
    });

    /**CATALOG**/
    var filtersPanel = $('#filters');
    $('#filterScroll').niceScroll();
    function hideFilters(){
        releaseBody();
        $('#screen').fadeOut();
        if (($(window).width()) < 650) {
            filtersPanel.css('right',-250);
        } else {
            filtersPanel.css('right',-500);
        }
    }
    
    /*SHOW FILTERS*/
    $('#filtersBtn').click(function(){
        $('#screen').fadeIn();
        cropBody();
        filtersPanel.css('right',0).addClass('active');
        setTimeout(function () {
            filtersPanel.getNiceScroll().resize();
        }, 400);
    });
    $(filtersPanel).find('.del').click(function(e){
        e.preventDefault();
        hideFilters();
    });

    /*FILTERS INSIDE*/
    /*more*/
    $(filtersPanel).find('.more').click(function (e) {
        e.preventDefault();
        $(this).hide().next('.l-filters_more').show();
        $("#filterScroll").getNiceScroll().resize();
    });
    /*2nd level*/
    $(filtersPanel).find('.cf').click(function (e) {
        e.preventDefault();
        $(filtersPanel).find('.inside').fadeOut('fast');
        $(this).siblings('.inside').fadeIn();
        $("#filterScroll").getNiceScroll(0).doScrollTop(0);
        if (($(window).width()) < 650) {
            $('.b-filters_wrp').css('margin-left',-250);
            $(this).siblings('.inside').css({left:250});
        } else  {
            $('.b-filters_wrp').css('margin-left',-500);
            $(this).siblings('.inside').css({left:500});
        }
    });
    /*back*/
    $(filtersPanel).find('.h-inside').click(function () {
        $(this).parents('.inside').css('left',0).fadeOut('fast');
        $('.b-filters_wrp').css('margin-left',0);
    });

    /*WINDOW RESIZE HANDLING*/
    var width = $(window).width();
    $(window).resize(function(){
        if($(this).width() != width){
            width = $(this).width();
            hideNav();
            hideFilters();
            $('#screen').fadeOut();

            if (($(window).width()) < 650) {
                navpanel.css('left',-250);
                filtersPanel.css('right',-250);
            } else {
                navpanel.css('left',-400);
                filtersPanel.css('right',-500);
            }
        }
        if($('body').hasClass('cropped')) {
            $('body').height($(window).height());
        }
    });

    /*SEARCH PANEL*/
    $('#btn-search').click(function(){
        if ( ($('#search-panel').hasClass('visible')) ) {
            $('#search-panel').css('margin-top',-50).removeClass('visible');
        } else {
            $('#search-panel').css('margin-top',0).addClass('visible');
        }

    });


   /* PRODUCT PAGE SPECS */
    function hideSpecs() {
        if (($(window).width()>649)) {
            $('#list-specs').css('height',260);
        } else {
            $('#list-specs').css('height',230);
        }
        $('.list-specs_full').click(function(e){
            e.preventDefault();
            $('#list-specs').css({height:'auto'});
            $(this).hide();
        });
    }
    hideSpecs();


    /*CAROUSEL*/
    var carousel = $('.b-carousel');
    carousel.jcarousel();
    $('.jcarousel-prev').jcarouselControl({target: '-=1'});
    $('.jcarousel-next').jcarouselControl({target: '+=1'});

    /*gallery positioning*/
    var $clone = $gallery.clone().insertAfter($gallery).addClass('gallery-clone');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 80 && $(window).width() > 770){
            $clone.show().css('max-width', $('.container').width()/2.06).lightGallery({thumbnail:true});
            $gallery.hide();
        }
        if ($(this).scrollTop() < 80) {
            $gallery.show();
            $clone.hide();
        }
    });

    /*plus-minus*/
    $('.qtyplus').click(function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).siblings('input[type=text]').val());
        if (!isNaN(currentVal)) {
            $($(this).siblings('input[type=text]')).val((currentVal + 1));
        } else {
            $($(this).siblings('input[type=text]')).val(0);
        }
    });
    $(".qtyminus").click(function(e) {
        e.preventDefault();
        var currentVal = parseInt($(this).siblings('input[type=text]').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $($(this).siblings('input[type=text]')).val((currentVal - 1));
        } else {
            $($(this).siblings('input[type=text]')).val(0);
        }
    });

    /*JUMP TO*/
    $('#jumpTo').click(function() {
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

    //Custom checkbox
    function setupLabel() {
        if ($('label.check input').length) {
            $('label.check').each(function(){
                $(this).removeClass('c_on');
            });
            $('label.check input:checked').each(function(){
                $(this).parent('label').addClass('c_on');
            });
        }
    }
    setupLabel();
    $('label.check').click(function(){
        setupLabel();
    });
});