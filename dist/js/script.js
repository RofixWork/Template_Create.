$(function () {
    //fixed menu
    $('header .fa-bars').click(function () {
        $('.fixed-menu').animate({
            right: 0
        },500)
    })
    let widthFixedMenu = $('.fixed-menu').innerWidth();
    $('.fixed-menu .fa-close').click(function () {  
        $(this).parent('.fixed-menu').animate({
            right: `-${widthFixedMenu}px`
        })
    })

    //background image

    let infoH= $('.info').innerHeight(),
        headerH = $('header').innerHeight();
        winH = $(window).height();

    $('.head').height(winH - (infoH + headerH));
    //add class active
    $('.list li a, .fixed-menu li a').click(function () {
        $('.list li a, .fixed-menu li a').removeClass('active');
        $(this).addClass('active');
    })
    //scroll to id 

    $('.list li a, .fixed-menu li a').on('click', function () {  
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top +1
        }, 1000)
    })

    //scroll and add class active
    $(window).scroll(function () {
        $('.block').each(function () {
            if($(window).scrollTop() > $(this).offset().top) {
                let attrId = $(this).prop('id');
                $('.list li a').removeClass('active');
                $(`.list li a[data-scroll=${attrId}]`).addClass('active');
            }
        })
    })
    

    //fixed navbar

    $(window).scroll(function () {
        if($(this).scrollTop() >= 80){
            $('header').addClass('fixed-top shadow');

        } else{
            $('header').removeClass('fixed-top shadow');
        }
        //btn scroll top
        if($(this).scrollTop() >= 350){
            $('.scroll-top').fadeIn();
        } else $('.scroll-top').fadeOut();
    })
    //btn scroll top
    $('.scroll-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    //form empty field
    $('[required]').blur(function() {
        if($(this).val() == '') {
            let prevElem = $(this).prev('label').text();
            $(this).next('.emailHelp').text(`${prevElem} Is Empty`).fadeIn().delay(2000).fadeOut();
           
        } 

    })
    

})