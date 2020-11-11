import 'slick-carousel/slick/slick.css'
import 'slick-carousel'

$(function() {
    $('#gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('#gallery-slider-arrows .left'),
        nextArrow: $('#gallery-slider-arrows .right'),
        appendDots: $('#gallery-slider-dots'),
        appendArrows: $('#gallery-slider-arrows'),
        fade: true,
        asNavFor: '#gallery-slider-nav'
    })


    $('#gallery-slider-nav').slick({
        slidesToScroll: 1,
        asNavFor: '#gallery-slider',
        infinite: true,
        focusOnSelect: false,       
        arrows: false,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
    })

    const currentIndex = $('#gallery-slider').slick('slickCurrentSlide')
    const active = 'gallery-slider__thumb-toggler-active'

    $('.gallery-slider__thumb-toggler').on('click', function() {
        if ($(this).hasClass(active)) {
            return
        } else {
            $('.gallery-slider__thumb-toggler-active').removeClass(active)
            $(this).addClass(active)
        }
    })
    
    $('#gallery-slider-nav')
        .find(`.slick-slide[data-slick-index='${currentIndex}']`)
        .find('.gallery-slider__thumb-toggler')
        .addClass(active)
})