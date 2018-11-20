(function () {

    const slider = $('#slider')

    const scroll = () => $('html, body').animate({
        scrollTop: slider.offset().top
    }, 350)

    $('.my-work-row button')
        .on('click', scroll)
        .on('touchstart', scroll)

    // let timeoutRef
    // $(window).scroll(function () {
    //     clearTimeout(timeoutRef)
    //     timeoutRef = setTimeout(function () {
    //         const sliderWindowDistance = slider.offset().top - window.scrollY
    //         if (sliderWindowDistance < 200 && sliderWindowDistance > 0)
    //             scroll()
    //     }, 500)
    // })

})()