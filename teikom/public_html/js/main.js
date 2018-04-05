$(document).ready(function () {


    $('.has-submenu').click(function (e) {
        e.preventDefault();
        $(this).next('.submenu').toggleClass('is-open');
    });

    $(".mobile-search").click(function (e) {
        e.preventDefault();
        $(".mobile-search-form").toggle();
    });

    if ($(".owl-carousel").length > 0) {

        //SPORT REVIEW SLIDER FOR MOBILE
        $(".lead-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true
//            autoplay: true,
//            autoplayTimeout: 5000
        });
    }

    $(window).scroll(function () {
        var addRemClass = $(window).scrollTop() > 0 ? 'addClass' : 'removeClass';
        $("header")[addRemClass]('bgChange');
    });

    $(function () {
        $(".active").click(function () {
            $(this).toggleClass("underline");
        });
    });

});