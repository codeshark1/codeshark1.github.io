function tabs() {
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

function chatExpand() {
    $('#chatHeader').click(function(){
        if ( $('#chatBody').is(':visible') ) {
            $('#chatBody').slideUp().removeClass('open');
            //$('#chatScroll').fadeOut();
            //$('#chatScroll').css('visibility',0);
            $('#container').animate({left: 0});
        } else {
            $('#chatScroll').height( $(window).height() - 213 );
            $('#chatBody').slideDown().addClass('open');
            //$('#chatScroll').fadeIn();
            //$('#chatScroll').css('visibility',1);
            $('#container').animate({left: -150});
        }
    });
}

$(document).ready(function(){
    tabs();
    $('.b-carousel').slick({
        infinite: false,
        slidesToShow: 6,
        appendArrows: $('.b-winners_carousel'),
        prevArrow: "<button class='slick-prev'></button>",
        nextArrow: "<button class='slick-next'></button>",
    });   
    chatExpand();
});