$(document).ready(function () {
    $('.menu-trigger').on('click', function () {
        $('.main-nav').slideToggle(200);
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
})