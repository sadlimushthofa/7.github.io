//lihat password
$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    let input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

//lihat password + confirm password


//animasi muncul ketika dicroll
$(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    console.log(wScroll);

    if (wScroll > $('.trending-topic').offset().top - 400) {
        $('.all-article-cards').each(function (i) {
            setTimeout(function () {
                $('.all-article-cards').eq(i).addClass('muncul');
            }, 200 * (i + 1));

        });
    }
});



//overlay pencarian
$('.search-icon').click(function () {
    $('.overlay-s').css('display', 'block')
})

$('.close-s').click(function () {
    $('.overlay-s').css('display', 'none')
})

//menu toggle
$('.menu-toggle').click(function () {
    $('nav').toggleClass('active')
})

$('ul li').click(function () {
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
})

//halaman
$('.next').click(function () {
    $('.pagination').find('.page-number.active').next().
        addClass('active');
    $('.pagination').find('.page-number.active').prev().
        removeClass('active');
})

$('.prev').click(function () {
    $('.pagination').find('.page-number.active').prev().
        addClass('active');
    $('.pagination').find('.page-number.active').next().
        removeClass('active');
})



//hapus dan tambah border-bawah tema-menu
$(document).scroll(function () {
    let scroll = $(document).scrollTop();
    if (scroll >= 55) {
        $('.tema-border').css("border-bottom", "2px solid #fc4a1a");
        $('.menu-themes').css("margin-top", "62px");
    } else {
        $('.tema-border').css("border", "none");
        $('.menu-themes').css("margin-top", "60px");
    }
});


//scroll ke id tujuan
$('.page-scroll').on('click', function (e) {
    const tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 1111, 'easeInOutExpo')
    e.preventDefault();
});

//kotak scroll top
$(document).scroll(function () {
    let scroll = $(document).scrollTop();
    if (scroll >= 100) {
        $('.scrollTop').css("display", "block");
    } else {
        $('.scrollTop').css("display", "none")
    }
});

//slide dengan autoload + tombol control
let modulSlide = (function () {
    let pb = {};
    pb.el = $('#slider');
    pb.items = {
        panels: pb.el.find('.slider-wrapper > li'),
    }

    let SliderInterval;
    let slideSekarang = 0;
    let slideSelajutnya = 1;
    let jumlahSlide = pb.items.panels.length;

    pb.init = function (settings) {
        this.settings = settings || { duration: 8000 };
        let items = this.items,
            lengthPanels = items.panels.length,
            output = '';

        for (let i = 0; i < lengthPanels; i++) {
            if (i == 0) {
                output += '<li class="active"></li>';
            } else {
                output += '<li></li>';
            }
        }

        $('#control-buttons').html(output);

        activateSlider();

        $('#control-buttons').on('click', 'li', function (e) {
            let $this = $(this);
            if (!(slideSekarang === $this.index())) {
                changePanel($this.index());
            }
        });
    }

    let activateSlider = function () {
        SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
    }


    pb.startSlider = function () {
        let items = pb.items;
        let controls = $('#control-buttons li');

        if (slideSelajutnya >= jumlahSlide) {
            slideSelajutnya = 0;
            slideSekarang = jumlahSlide - 1;
        }

        controls.removeClass('active').eq(slideSelajutnya).addClass('active');
        items.panels.eq(slideSekarang).fadeOut('slow');
        items.panels.eq(slideSelajutnya).fadeIn('slow');

        slideSekarang = slideSelajutnya;
        slideSelajutnya += 1;
    }
    let changePanel = function (id) {
        clearInterval(SliderInterval);
        let items = pb.items,
            controls = $('#control-buttons li');

        if (id >= jumlahSlide) {
            id = 0;
        } else if (id < 0) {
            id = jumlahSlide - 1;
        }

        controls.removeClass('active').eq(id).addClass('active');
        items.panels.eq(slideSekarang).fadeOut('slow');
        items.panels.eq(id).fadeIn('slow');

        slideSekarang = id;
        slideSelajutnya = id + 1;

        activateSlider();
    }
    return pb;
}());

modulSlide.init({ duration: 3000 });





