$(document).ready(function () {


    $('.has-submenu').click(function (e) {
        e.preventDefault();
        $(this).next('.submenu').slideToggle();
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

    var scroll_pos = 0;
    $(document).scroll(function (e) {
        e.preventDefault();
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {
            $("header").css('background-color', 'white');
            $(".main-nav .main-link").attr('style', 'color: black !important');
            $(".language-dropdown a").attr('style', 'color: black !important');
            $(".desktop-search .fa").attr('style', 'color: black !important');
        } else {
            $("header").css('background-color', 'transparent');
            $(".main-nav .main-link").attr('style', 'color: white !important');
            $(".language-dropdown a").attr('style', 'color: white !important');
            $(".desktop-search .fa").attr('style', 'color: white !important');
        }
    });

});