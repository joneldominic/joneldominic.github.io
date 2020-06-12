$(window).resize(function () {
    navbarResoponsiveness();
});

$(window).scroll(function () {
    navBarFixedHandler();
});

$(document).ready(function () {

    navbarResoponsiveness();
    navBarFixedHandler();

    $("a.nav-link").click(function () {
        $("a.nav-item").removeClass("active");
        $(this).addClass("active");
    });

});


// ***********************************************************
// Methods 
// ***********************************************************

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
    
    alert(scrollYOffset+ ">" +navHeight);
    if(scrollYOffset > navHeight) {
        $("#mainNavigationBar").addClass("fixed-top");
        $("#mainNavigationBar").css('border-bottom', '1px solid rgba(40,41,41,0.80)');
    } else {
        $("#mainNavigationBar").removeClass("fixed-top");
        $("#mainNavigationBar").css('border-bottom-width', '0px');
    }
}