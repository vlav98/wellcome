$(document).ready(function () {
    const observer = lozad();
    observer.observe();

    $(function () {
        $.scrollify({
            section: ".section",
            interstitialSection: "footer",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: function () {},
            after: function () {},
            afterResize: function () {},
            afterRender: function () {}
        });
    });

    if (window.matchMedia("(max-width: 991.98px)").matches) {
        $.scrollify.disable();
    }
    $(window).resize(function () {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            $.scrollify.disable();
        } else {
            $.scrollify.enable();
        }
    });
    var box = $('.box');
    var button = $('.open-menu, .header-menu');
    button.on('click', function () {
        box.toggleClass('active');
    });
    $(".access-btn").click(function () {
        $(".access-panel").animate({
            width: "toggle"
        });
    });

    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });
    $('#discover-content').on('click', function () { // Au clic sur un élément
        var page = "#sekou"; // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    $('#footer-btn').on('click', function () { // Au clic sur un élément
       /*  if ($('#footerResp').length) {
            var page = "#footerResp"; // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate({
                scrollTop: $(page).offset().top
            }, speed); // Go
            return false;
        } */
        $('#footerResp').toggle();
    }); 

    $(".podcast-btn").click(function () {
        if ($('.scApi').css("visibility") === "hidden") {
            $(".scApi").css("visibility", "visible");
        } else {
            $(".scApi").css("visibility", "hidden");
        }
    });

    if ($('.pagination').length) {
        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
        $(window).on('resize scroll', function () {
            $('section').each(function () {
                var activeSlide = $(this).attr('id');
                if ($('#home').isInViewport()) {
                    $('.pagination').css("display", "none");
                } else if ($(this).isInViewport() && $(this) !== $('#home')) {
                    $('.pagination').css("display", "block");
                    if (activeSlide == $('#qnav-' + activeSlide).attr('id').slice(5)) {
                        $('#qnav-' + activeSlide).addClass('active');
                    }
                } else {
                    $('#qnav-' + activeSlide).removeClass('active');
                }
            });
        });
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-50%";
    }
    prevScrollpos = currentScrollPos;
};
$(document).on("focus", ".required", function () {
    $(this).removeAttr('placeholder');
});
$(document).on("focusout", ".required", function () {
    if ($(this).val() === '') {
        $(this).attr('placeholder', "Ce champ est requis.");
    }
});
