import 'slick-carousel/slick/slick.css'
import 'slick-carousel'

$(function() {
    $('#layouts-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, 
        arrows: true,
        prevArrow: $('#layouts-slider-arrows .left'),
        nextArrow: $('#layouts-slider-arrows .right'),
        appendDots: $('#layouts-slider-dots'),
    })
})

$('#layout-tabs').on('click', function(e) {   
    $(this).find('.layouts__tab.active').removeClass('active')
    $(e.target).addClass('active')
})