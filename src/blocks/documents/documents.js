import 'slick-carousel/slick/slick.css'
import 'slick-carousel'

$(function() {
    $('#documents-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        adaptiveHeight: true,
        dots: true, 
        arrows: true,
        prevArrow: '<img src="./img/arrow-left.svg" alt="Previous" class="arrow-left">', 
        nextArrow: ' <img src="./img/arrow-right.svg" alt="Next" class="arrow-right">', 
        appendArrows: $('#documents-slider-arrows'),
        appendDots: $('#documents-slider-dots'),
    })
})