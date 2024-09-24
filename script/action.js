$('header nav li').click(function () {
    /*     $('header nav li').removeClass('on')
        $(this).addClass('on') */
    $(this).addClass('on').siblings().removeClass('on')
})

$('.mo_gnbbox li').click(function () {
    $(this).addClass('on').siblings().removeClass('on')
})
/* $('header nav li').eq(1).click(function () {
    $('html').animate({ scrollTop: '2000px' })
})

$('header nav li').eq(2).click(function () {
    $('html').animate({ scrollTop: '3000px' })
}) */

$('header .hamburger').click(function () {
    $('.mo_gnbbox').fadeIn()
})

$('.mo_gnbbox figure').click(function () {
    $('.mo_gnbbox').fadeOut()
})
$('header nav li a').click(function () {
    var abc = $(this).attr('data-heh')

    console.log(abc) //첫번째 #section1

    var def = $('.' + abc).offset().top
    console.log(def)

    $('html').animate({ scrollTop: def })
})

$('mo_gnbbox li a').click(function () {
    var abc = $(this).attr('data-heh')

    console.log(abc) //첫번째 #section1

    var def = $('.' + abc).offset().top
    console.log(def)

    $('html').animate({ scrollTop: def })
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