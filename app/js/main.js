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
        // autoplay: true,
        speed: 1000,
    });
    // $(".fancybox").fancybox({
    //     openEffect: 'none',
    //     closeEffect: 'none'
    // });
});