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
  var bodyWidth = $('body').width();

  $('#nav-open').click(function(){
      if( $('.b-overlay').is(':visible') ) {
        $('.b-overlay').fadeOut(200);
        $('.menu-backdrop').fadeOut(200).remove();
        $('body').removeClass('menu-open');
        $(this).removeClass('active');
        $('.b-sticky').css('padding-right',0);
      } else {
        $('body').addClass('menu-open');
        $('.b-sticky').css('padding-right',scrollWidth);
        $('<div class="menu-backdrop"></div>').appendTo('body').fadeIn(200);
        $('.b-overlay').fadeIn(200);
        $(this).addClass('active');
      }
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

var scrollWidth = 0;
function scrollbarWidth() {
    var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');    
    $('body').append(div);
    var w1 = $('div', div).innerWidth();
    div.css('overflow-y', 'scroll');
    var w2 = $('div', div).innerWidth();
    $(div).remove();
    scrollWidth = (w1 - w2);
    return scrollWidth;
     
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
    scrollbarWidth();


    var height = $( window ).height();
    var up = $('#up').hide();
    $(window).on('scroll',function () {
        var offset = up.offset();
        if ((offset.top) > height) {
            $(up).fadeIn(200);
        } else {
            $(up).fadeOut(200);
        }
    });

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
});
