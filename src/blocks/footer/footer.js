$(function() {
    $('.footer__lang').on('click', function(event) {
        if( $(event.target).hasClass('active')) return
        else 
            $('.footer__lang .active').removeClass('active')
            $(event.target).addClass('active')
    })
})