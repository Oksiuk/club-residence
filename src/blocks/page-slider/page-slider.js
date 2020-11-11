import 'slick-carousel/slick/slick.css'
import 'slick-carousel'

$(function() {
    const slider = $('.page-slider')

    slider.slick({
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        infinite: false,
        dots: true, 
        arrows: true,
        prevArrow: '<img src="./img/arrow-up.svg" alt="Previous" class="arrow-up">', 
        nextArrow: ' <img src="./img/arrow-down.svg" alt="Previous" class="arrow-down">',
        appendArrows: $('.page-slider-controls__arrows'),
        appendDots: $('.page-slider-controls__dots'),
        vertical: true,
        verticalSwiping: true,
        rows: window,
        slidesToShow: 1,
    })
    
    $(window).on('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            slider.slick('slickPrev')
        }
        else {
            slider.slick('slickNext')
        }
    })

    slider.on('afterChange', function(event, slick, currentSlide){
        var dataId = $('.slick-current').attr("data-slick-index");    
        if (dataId == 0) {
            $('.page-slider-controls').hide()
        } else {
            $('.page-slider-controls').show()
        }
    })
})