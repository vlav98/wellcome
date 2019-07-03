$(document).ready(function () {
    const observer = lozad();
    observer.observe();

    $(window).on('resize', function () {
        if (window.matchMedia("(min-width: 767.98px)").matches) {
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
                    before: function () { },
                    after: function () { },
                    afterResize: function () { },
                    afterRender: function () { }
                });
            });
            
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
                    }
                    else {
                        $('#qnav-' + activeSlide).removeClass('active');
                    }
                });
            });

        } else {
            /* L'affichage est inférieur à 600px de large */
        }
    });

    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
        return false;
    });

    $(".podcast-btn").each(function(index) {
        $(".podcast-btn").click(function () {
            $("scApi").find(index).toggle();
        });
    });
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