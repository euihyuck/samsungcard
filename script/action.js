$('header nav li').click(function () {
    /*     $('header nav li').removeClass('on')
        $(this).addClass('on') */
    $(this).addClass('on').siblings().removeClass('on')
})

/* $('header nav li').eq(1).click(function () {
    $('html').animate({ scrollTop: '2000px' })
})

$('header nav li').eq(2).click(function () {
    $('html').animate({ scrollTop: '3000px' })
}) */

$('header nav li a').click(function () {
    var subin = $(this).attr('data-heh')

    console.log(subin) //첫번째 #section1

    var yeeun = $('.' + subin).offset().top
    console.log(yeeun)

    $('html').animate({ scrollTop: yeeun })
})





$('#section2 .part2 figure').mouseenter(function () {
    $(this).addClass('on')

    $('#section2 .part2 figure').mouseleave(function () {
        $(this).removeClass('on')




    })
})
$('#section2 .part3 figure').mouseenter(function () {
    $(this).addClass('on')

    $('#section2 .part3 figure').mouseleave(function () {
        $(this).removeClass('on')




    })
})


/* $('#section2 .part2 figure').dbclick(function () $(this).removeClass('on')})
}) */