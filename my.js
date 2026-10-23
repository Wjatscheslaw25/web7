$(document).ready(function() {
    let $slider = $('.slider');

    // Инициализация Slick Slider с четким правилом адаптивности
    $slider.slick({
        infinite: true,
        slidesToShow: 3,   // На ПК — 3 изображения
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // На экранах меньше 768px (смартфоны)
                settings: {
                    slidesToShow: 1, // Ровно 1 изображение на экране
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Функция обновления пейджера
    function updatePager(slick) {
        let currentBreakpoint = slick.activeBreakpoint;
        // Если сработал брейкпоинт для мобилок, показываем по 1 на странице
        let slidesToShow = (window.innerWidth < 768) ? 1 : 3;
        
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
