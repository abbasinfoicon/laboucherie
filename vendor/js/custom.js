// -------- Jquery start ------- //
$(function () {
    // prev button
    $('.nous-clubs .controller .prev').click(function () {
        $('#owlcarousel-nosclubs').trigger('prev.owl.carousel');
    });
    // prev button
    $('.nous-clubs .controller .next').click(function () {
        $('#owlcarousel-nosclubs').trigger('next.owl.carousel');
    });

    // square-box
    $('.dish-row .square-box').each(function () {
        var thumbnailsrc = $(this).find('.dish-thumbnail').attr('src');
        $(this).css('background-image', 'url(' + thumbnailsrc + ')');
    });

    // ence-moment
    $('.ence-moment .ence-container').each(function () {
        var thumbnailsrc = $(this).find('.back-image').attr('src');
        $(this).css('background-image', 'url(' + thumbnailsrc + ')');
    });

    var headerclone = $('.header').clone();
    $('.mega-menu-bar .body-container').prepend(headerclone);
    $('.mega-menu-bar .header .menu-icon').addClass('active');
    // menu-icon
    $('.header .menu-icon').click(function (event) {
        $(this).toggleClass('active');
        var check = $('.mega-menu-bar').is(':hidden');
        if (check) {
            $('.mega-menu-bar').fadeIn('fast');
            $('.mega-menu-bar .header .menu-icon').addClass('active');
            // setTimeout function
            setTimeout(function () {
                $('html, body').animate({scrollTop: 0});
            }, 100);
        }
        else {
            $('.mega-menu-bar').fadeOut('fast');
            $('.header .menu-icon').not($('.mega-menu-bar .header .menu-icon')).removeClass('active');
        }

        if ($(window).width() <= 991) {
            if (check) {
                $('body').addClass('modal-open');
            }
            else {
                $('body').removeClass('modal-open');
            }
        }

        // preventDefault
        event.preventDefault();
    });

    // insert_navbar
    if ($(window).width() <= 1024) {
        var firstcol_nav = $('.mega-menu-bar .body-container .container .col-sm-4:first');
        $('.header .navbar .navbar-nav').removeClass('nav navbar-nav navbar-right');
        var navbarnav = $('.header .navbar-collapse').clone().html();
        var navbar_html_add = '<div class="link-container"><h4>Main menu <i class="material-icons dp48 home-icon">home</i></h4>' + navbarnav + '</div>';
        firstcol_nav.prepend(navbar_html_add);
        // inner-right
        $('.resultats-block .inner-right').insertAfter($('.resultats-block .inner-map-content h1'));
    }

    // boucherHeight
    var boucherHeight = $('.club-la-boucher .boucher').innerHeight();
    if ($(window).width() >= 992) {
        $('.club-la-boucher .connect-login').css('height', boucherHeight);
    }
    // header navbar-right
    if ($(window).width() >= 1025) {
        $('.header .navbar-collapse .navbar-right li').each(function () {
            $(this).children('a').wrapInner("<span></span>");
        });
    }

    // mortem-velim
    if ($(window).width() <= 991) {
        $('.mortem-velim').insertAfter($('.mortem-legens'));
    }

    // access-favorites
    $('.access-favorites .dropdown-menu a').click(function (event) {
        var areatext = $(this).text();
        $('.area-input').val(areatext);
        $('.access-favorites .input-group-addon b').text(areatext);
        // preventDefault
        event.preventDefault();
    });

    // deroulants-tab le-prix
    $('.deroulants-tab .le-prix').click(function () {
        var datatarget = $(this).attr('data-target');
        var othertab = $(this).parents('.tabbing-deroulants-conatiner').siblings('.tabbing-deroulants-conatiner');
        var scrollval = $(this).parents('.tabbing-deroulants-conatiner').offset().top + 25;
        $(this).siblings('.le-prix').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.pills-parent').next('.deroulants-tab-pane').show();
        $(this).parents('.tabbing-deroulants-conatiner').find('.pills-parent').removeClass('unactive');

        // othertab siblings
        $(datatarget).tab('show');
        othertab.find('.le-prix.active').removeClass('active');
        othertab.find('.pills-parent').addClass('unactive');
        $('html,body').animate({'scrollTop': scrollval},500, 'swing',function () {
            othertab.find('.deroulants-tab-pane').slideUp('slow');
        });
    });

    // close-deroulants
    $('.close-deroulants').click(function () {
        var derouTab =  $(this).parents('.tabbing-deroulants-conatiner');
        var scrollval = $(this).parents('.tabbing-deroulants-conatiner').offset().top + 10;
        $(this).parents('.deroulants-tab-pane').slideUp('swing');
        derouTab.find('.pills-parent').addClass('unactive');
        $('html,body').animate({'scrollTop': scrollval},500, 'swing');
        derouTab.find('.le-prix.active').removeClass('active');
    });

    /*------ mCustomScrollbar ----*/
    $(window).load(function () {
        $(".mCustomScrollbar").mCustomScrollbar({
            scrollButtons: {enable: true},
            theme: "light-thick",
            scrollbarPosition: "inside"
        });
    });

});
// -------- Jquery end ------- //

// -------- owlcarousel-nosclubs  ------- //
$('#owlcarousel-nosclubs').owlCarousel({
    margin: 15,
    loop: true,
    nav: false,
    autoplay: true,
    smartSpeed: 700,
    rewind: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 1,
            margin: 0
        },
        1000: {
            items: 1
        }
    }
});

// -------- owlcarousel-nosclubs  ------- //
$('#support-slider').owlCarousel({
    margin: 15,
    animateOut: 'zoomOutLeft',
    animateIn: 'zoomInRight',
    touchDrag : false,
    mouseDrag : false,
    rewind: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 700,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// -------- oencemoment-slider  ------- //
$('#encemoment-slider').owlCarousel({
    margin: 15,
    animateOut: 'bounceOutDown',
    animateIn: 'bounceInDown',
    touchDrag : false,
    mouseDrag : false,
    rewind: true,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 700,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




