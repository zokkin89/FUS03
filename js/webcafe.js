$(function() {
    $('.btn-menubar').on('click', function() {
        $(this).parent().siblings()
            .toggleClass('main-menu-act');
    });
    $('.menubar').on('click', function() {
        $(this).parent().siblings()
            .toggleClass('main-menu-act');
    });
});