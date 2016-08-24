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

function nav() {
    $('#nav-open').click(function(){
        if( $('#nav-section').is(':visible') ) {
          $('#nav-section').fadeOut(200);
          $('#page-wrapper').fadeIn(200);
          $('body').removeClass('menu-open');
          $(this).removeClass('active');
        } else {
          $('#nav-section').fadeIn(200);
          $('#page-wrapper').fadeOut(200);
          $('body').addClass('menu-open');
          $(this).addClass('active');
        }
    });

    $('#nav-close').click(function(){
        $('#nav-section').fadeOut();
        $('#page-wrapper').fadeIn();
        $('html').css('background', '#fff');
    });
}

function menu() {
  function menu_close() {
    $('#nav-menu .active').removeClass('active').siblings('ul').fadeOut(200);
  }

  $('#nav-menu a').click(function(e){
    e.stopPropagation();
    menu_close();
  });

  $('#nav-menu .menu-item:has(ul)').children('a').click(function(e){    
      e.preventDefault();
      if( $(this).siblings('ul').is(':visible') ) {
        $(this).removeClass('active').siblings('ul').fadeOut(200);
      } else {        
        $(this).addClass('active').siblings('ul').fadeIn(200);
      }    
  });

  $('body').click(function(){
      menu_close();
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

function review() {
    $('.b-rev_i').click(function(){
        $(this).toggleClass('active');
    });
}

function filter_type_tabs() {
  $('.aj-links a, .area-select a').click(function(e){
    e.preventDefault();
    if (! $(this).hasClass('active') ) {
      $(this).addClass('active').parent().siblings().find('.active').removeClass('active');      
    } 
  });
}

$(document).ready(function(){

    responsiveIframe();
    $(window).resize(function(){
        responsiveIframe();
    });
    nav();
    tabs();
    review();
    menu();
    filter_type_tabs();



    $('.image-popup').magnificPopup({type:'image'});
    $('.b-gallery, .b-sertifs').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });


  /*SLIDERS/CAROUSELS*/
    $('#gallery-prod a').click(function(e){
      e.preventDefault();
      $("#gallery-prod-img").attr( "src", $(this).attr("href") );
    });


});