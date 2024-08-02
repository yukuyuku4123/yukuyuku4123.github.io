$(function(){
    
    var wrap = $('#mainNavWrap');

    $('#navTrigger').on('click', function(){
        wrap.toggleClass('view');
    })
    
    wrap.on('click', function(){
        $(this).removeClass('view');
    })

    $('a[href^="#"]').on('click', function(){
        var target = $($(this).attr('href'));
        var point = target.offset().top - 40;

        $('html, body').animate({scrollTop : point}, 900)
        wrap.removeClass('view')

        return(false)
    })
})