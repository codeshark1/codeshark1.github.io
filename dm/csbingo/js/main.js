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

$(document).ready(function(){
    tabs();
});