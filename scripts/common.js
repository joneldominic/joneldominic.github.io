$(window).resize(() => {
    navbarResoponsiveness();
    contentSectionResponsiveness();
});

$(window).on('resize scroll', () => {
    navBarFixedHandler();
});

onScrollStopped(window, () => {
    navGetCurrentSection();
});

$(document).ready(() => {

    navbarResoponsiveness();
    navBarFixedHandler();
    navGetCurrentSection();
    contentSectionResponsiveness();

    $("a.nav-link").click(() => {
        $("a.nav-item").removeClass("active");
        $(this).addClass("active");

        // Collapse navbar on mobile view
        $("#mainNavbarNav").removeClass("show");
    });


    // let height = window.innerHeight - $("#mainNavigationBar").height();
    // $(".content, .section").css("height", `${height}px`);


});

window.addEventListener('load', function () {
    if ($(".pre-loader").length > 0) {
        $(".pre-loader").delay(500).fadeOut("slow");
    }
});

// ***********************************************************
// Methods 
// ***********************************************************

function onScrollStopped(domElement, callback, timeout = 200) {
    domElement.addEventListener('scroll', () => {
        clearTimeout(callback.timeout);
        callback.timeout = setTimeout(callback, timeout);
    });
}

function navbarResoponsiveness() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $("#idToggleBtn").removeClass("collapse");

        $("#mainNavbarNav").removeClass("collapse-in");
        $("#mainNavbarNav").addClass("collapse navbar-collapse");
        $("#mainNavbarNav > nav").addClass("navbar-nav");

    } else {
        $("#idToggleBtn").addClass("collapse");

        $("#mainNavbarNav").removeClass("collapse navbar-collapse");
        $("#mainNavbarNav").addClass("collapse-in");
        $("#mainNavbarNav > nav").removeClass("navbar-nav");
    }
}

function navBarFixedHandler() {
    const navHeight = $("#mainNavigationBar").height() + 15;
    const scrollYOffset = window.pageYOffset;

    if (scrollYOffset > navHeight) {
        $("#mainNavigationBar").addClass("fixed-top active-nav");
    } else {
        $("#mainNavigationBar").removeClass("fixed-top active-nav");
    }
}

function contentSectionResponsiveness() {
    let height = window.innerHeight - $("#mainNavigationBar").height();
    $(".content").css("height", `${height}px`);
}

$.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function navGetCurrentSection() {
    let activeSectionId = "home";

    $('section').each(function () {

        if ($(this).isInViewport()) {
            activeSectionId = $(this).attr('id');
        }
    });

    if (!$(`[section-id='${activeSectionId}']`).hasClass("active")) {
        $("a.nav-item").removeClass("active");
        $(`[section-id='${activeSectionId}']`).addClass("active");

        const url = window.location.href.substr(0, window.location.href.indexOf('#') < 0 ? window.location.href.length : window.location.href.indexOf('#'));
        const section = activeSectionId !== 'home' ? `#${activeSectionId}` : "";
        window.history.replaceState("", "About", `${url}${section}`);
    }
}