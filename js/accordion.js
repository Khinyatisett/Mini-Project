// Accordion
$(function () {
    $(".accordion-content:not(:last-of-type)").css("display", "none");
    $(".js-accordion-title:last-of-type").addClass("open");
    $(".js-accordion-title").click(function () {
        $(".open").not(this).removeClass("open").next().slideUp(300);
        $(this).toggleClass("open").next().slideToggle(300);
    });
});