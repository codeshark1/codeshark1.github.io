function tabs_products() {
    $('.b-tabs-tab:not(:first)').hide();    
    $('.b-tabs-btns a').click(function(e) {
        e.preventDefault();
        if ( ! $(this).hasClass('active')) {
            $('.b-tabs-tab').hide();
            $('.b-tabs-btns a.active').removeClass('active');
            $(this).addClass('active');
            var clicked = $(this).attr('href');
            $(clicked).fadeIn('fast');
        }
    });
}

function tabs_profile() {
    $('.b-profile-tabs-tab:not(:first)').hide();    
    $('.b-profile-tabs-btns a').click(function(e) {
        
        if ( ! $(this).hasClass('mod') ) {
            e.preventDefault();

            if ( ! $(this).parent('li').hasClass('active') ) {
                $('.b-profile-tabs-tab').hide();
                $('.b-profile-tabs-btns .active').removeClass('active');
                $(this).parent('li').addClass('active');
                var clicked = $(this).attr('href');
                $(clicked).fadeIn('fast');
            }
        }
    });
}

function chatExpand() {
    $('#chatHeader').click(function(){
        if ( $('#chatBody').is(':visible') ) {
            $('#chatBody').slideUp().removeClass('open');
            $('#container').animate({left: 0});
        } else {
            $('#chatScroll').height( $(window).height() - 213 );
            $('#chatBody').slideDown().addClass('open');
            $('#container').animate({left: -150});
        }
    });
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
       animated : 'fade',
       container: 'body'
    });

    tabs_products();
    tabs_profile();
    chatExpand();

    $('.b-data-url input').validate();

    $(".b-data-url input").addClass('blank');
    $(".b-data-url input").on("input", function() {
        if($(".b-data-url input").is(":blank")) {
          $(".b-data-url input").addClass('blank');
        } else {
            $(".b-data-url input").removeClass('blank');
        }        
    });



    $('#carousel-winners').slick({
        slidesToShow: 6,
        infinite: false,
        speed: 200,
        appendArrows: $('.b-winners_carousel'),
        prevArrow: "<button class='slick-prev'></button>",
        nextArrow: "<button class='slick-next'></button>",
    });   

    $('#carousel-shoplist').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        appendArrows: $('#carousel-shoplist'),
        prevArrow: "<button class='slick-prev'>&lt;</button>",
        nextArrow: "<button class='slick-next'>&gt;</button>",
    });   
});