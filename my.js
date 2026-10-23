$(document).ready(function() {
    let $slider = $('.slider');

    // Инициализация Slick Slider
    $slider.slick({
        infinite: true,
        slidesToShow: 3,   // 3 изображения на ПК
        slidesToScroll: 1,
        arrows: true,      // Включаем стрелки
        responsive: [
            {
                breakpoint: 768, // На мобильных устройствах
                settings: {
                    slidesToShow: 1 // 1 изображение на экране
                }
            }
        ]
    });

    // Функция обновления пейджера
    function updatePager(slick) {
        let slidesToShow = slick.options.slidesToShow;
        if (window.innerWidth < 768) {
            slidesToShow = 1;
        }
        
        let totalSlides = slick.slideCount;
        let totalPages = Math.ceil(totalSlides / slidesToShow);
        let currentSlide = slick.currentSlide;
        let currentPage = Math.floor(currentSlide / slidesToShow) + 1;

        $('#current-page').text(currentPage);
        $('#total-pages').text(totalPages);
    }

    $slider.on('init', function(event, slick) {
        updatePager(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updatePager(slick);
    });

    setTimeout(function() {
        updatePager($slider.slick('getSlick'));
    }, 100);
});
