$(document).ready(function () {

    let slider, slider_item,
        slider_item_margin,
        slider_item_count,
        slider_item_width,
        slider_height,
        slider_width;
    
    resize_for_all();
    $(window).resize(resize_for_all);

    $('.go-left').click(function () {
        move_left();
        return false;
    });

    $('.go-right').click(function () {
        move_right();
        return false;
    });

    function move_left() {
        slider.animate({
            left: +slider_item_width
        }, 300, function () {
            slider_item.last().appendTo(slider);
            slider.css('left', '');
        });
    }

    function move_right() {
        slider.animate({
            left: -slider_item_width
        }, 300, function () {
            slider_item.last().appendTo(slider);
            slider.css('left', '');
        });
    }

    function resize_for_all() {
        slider = $('.slider');
        slider_item = $('.slider-item');
        slider_item_margin = Number($('.slider-item').css('marginLeft').slice(0, 2));
        slider_item_count = slider_item.length;
        slider_item_width = slider_item.width() + slider_item_margin;
        slider_height = slider_item.height();
        slider_width = slider_item_width * slider_item_count + slider_item_margin;

        slider.css({
            height: slider_height,
            width: slider_width,
            marginLeft: -slider_item_width 
        });
        $('.slider-wrapper').css({
            height: slider_height,
            width: slider_item_width * 3 + slider_item_margin                             
        });
    }
  
});