import 'slick-carousel/slick/slick.css'
import 'slick-carousel'

$(function() {
    $('#home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true, 
        arrows: true,
        prevArrow: $('#home-slider-arrows .left'),
        nextArrow: $('#home-slider-arrows .right'),
        appendDots: $('#home-slider-dots'),
        autoplay: true,
        autoplaySpeed: 5000
    })
})