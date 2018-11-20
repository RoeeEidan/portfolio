$(function () {

    var Page = (function () {

        var $navArrows = $('#nav-arrows'),
            $nav = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange: function (slide, pos) {

                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');

                }
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

                // add navigation events
                const next = function () {
                    slitslider.next();
                    return false;
                }
                $navArrows.children(':last')
                    .on('click', next)
                    .on('touchstart', next);

                const prev = function () {
                    slitslider.previous();
                    return false;
                }

                $navArrows.children(':first')
                    .on('click', prev)
                    .on('touchstart', prev)

                $nav.each(function (i) {

                    const setIndex = function (event) {
                        var $dot = $(this);
                        if (!slitslider.isActive()) {
                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');
                        }

                        slitslider.jump(i + 1);
                        return false;

                    }

                    $(this)
                        .on('click', setIndex)
                        .on('touchstart', setIndex)

                });

            };

        return { init: init };

    })();

    Page.init();

    /**
     * Notes: 
     * 
     * example how to add items:
     */

    /*
    
    var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner creative-genius"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
    
    // call the plugin's add method
    ss.add($items);

    */

});