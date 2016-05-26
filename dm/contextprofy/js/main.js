$(document).ready(function(){
    /* PLUGINS */
    $('input, textarea').placeholder();
      $('.b-slider').slick({
          dots: true,
          infinite: true,          
          adaptiveHeight: true,
          prevArrow: "<button type='button' class='slick-prev'>&lsaquo;</button>",
          nextArrow: "<button type='button' class='slick-next'>&rsaquo;</button>",
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
    $('#button-menu').click(function(){
        if ( $('#menu').is(':visible') ){
            $('#menu').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#menu').slideDown();
        }
    });

    //Tabs:
  $('.b-tabs-digest .tab:not(:first)').hide();    
  $('.b-tabs-digest-btns a').click(function(event) {
      event.preventDefault();
      if ( ! $(this).hasClass('active')) {
          $('.b-tabs-digest .tab').hide();
          $('.b-tabs-digest-btns a.active').removeClass('active');
          $(this).addClass('active');
          var clicked = $(this).attr('href');
          $(clicked).fadeIn('fast');
      }
  });
});