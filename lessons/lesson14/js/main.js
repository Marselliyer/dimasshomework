// Активация бургер меню
$(function () {
    const $burger = $('.menu_burger');
    const $menu = $('.header_menu');

    $burger.on('click', function (e) {
        e.stopPropagation();
        $burger.add($menu).toggleClass('active');
        const isOpen = $menu.hasClass('active');
        $burger.attr('aria-expanded', isOpen);
    });

    $menu.on('click', '.menu_list-item a', function () {
        $burger.add($menu).removeClass('active');
        $burger.attr('aria-expanded', 'false');
    });

    $(document).on('click', function (e) {
        if (!$menu.hasClass('active')) return;

        const $target = $(e.target);
        if ($target.closest('.header_menu').length) return;
        if ($target.closest('.menu_burger').length) return;

        $burger.add($menu).removeClass('active');
        $burger.attr('aria-expanded', 'false');
    });
});

// Появление тени при скролле у header
const headerInner = document.querySelector('.header');
window.addEventListener('scroll', () => {
    headerInner.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });





// $('.menu_burger').click(function () {
//     $('.menu_burger, .header_menu').toggleClass('active')
// })

// $(function () {
//     const $headerInner = $('.header');
//     const threshold = 20;

//     function toggleHeaderShadow() {
//         if ($(window).scrollTop() > threshold) {
//             $headerInner.addClass('is-scrolled');
//         } else {
//             $headerInner.removeClass('is-scrolled');
//         }
//     }

//     toggleHeaderShadow();

//     $(window).on('scroll', toggleHeaderShadow);
// });