$(function() {
    var button = $('.btn-menubar');
    var button_span = $('.btn-menubar, .menubar');
    var container = $('.menubar-container');
    var main_menu = $('.main-menu');
    var last_menu = $('.main-menu li:last-child a');

    button_span.on('click', function() {
        container.toggleClass('menubar-act');
        main_menu.toggleClass('main-menu-act');
        if (container.hasClass('menubar-act')) {
            button.text('메인 메뉴 닫기');
        } else {
            button.text('메인 메뉴 보기');
        }
    });
    last_menu.on('focusout', function() {
        container.toggleClass('menubar-act');
        main_menu.toggleClass('main-menu-act');
    });
});