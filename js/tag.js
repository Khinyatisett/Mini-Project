$(document).ready(function () {
    $('.tag-menu-item').click(function () {
        $('.tag-menu-item.active').removeClass('active');
        $(this).addClass('active');
        $('.tag-menu-desc .primarymain-ttl').text($(this).text());
    });
});