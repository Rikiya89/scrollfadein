'use strict';

{
    $(function () {

        let navPos = $('#gNav').offset().top;
        // console.log(navPos);

        // nav fixed
        $(window).on('load scroll', function () {
            if ($(this).scrollTop() > navPos) {
                $('#gNav').addClass('fixed');
            } else {
                $('#gNav').removeClass('fixed');
            }


            //fadeIn animation
            let fadeInBottom = $('.fadeInBottom');
            // console.log(fadeInBottom);

            fadeInBottom.each(function () {
                let boxOffset = $(this).offset().top;
                let scrollPos = $(window).scrollTop();
                let wh = $(window).height();
                // console.log(boxOffset);
                // console.log(scrollPos);

                if (scrollPos > boxOffset - wh + 100) {
                    $(this).addClass('animated');
                }
            });

        });// scrollイベント
        $('a[href^="#"]').on('click', function () {
            const speed = 500;
            const href = $(this).attr('href');
            console.log(href);

            const target = $(href === '#' || href === "" ? 'body, html' : href);
            const position = target.offset().top;
            $('body, html').animate({
                scrollTop: position,
            }, speed, 'swing');
            return false;
        });

    });// jQuery
}