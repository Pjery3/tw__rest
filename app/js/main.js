$(function () {
    $('.header__nav li a').on('click', function (e) {
        $('.header__nav li a').removeClass();
        e.target.classList.add('active');
    })

    $('.slider-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
    });
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    $('.header__nav-burger').on('click', function(){
        $('.header__nav').addClass('active');
    })
    $('.header__nav-burger').on('click', function () {
        var state = 1
        return function () {
            if (state === 1) {
                state = 2
                $('.header__nav').addClass('active');
            } else if (state === 2) {
                state = 1
                $('.header__nav').removeClass('active');
            }

        }
    }());

    


});