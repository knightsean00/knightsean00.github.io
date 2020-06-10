$(window).scroll(function () {

    // Transparent header toggle
    if ($(window).scrollTop() > 0) {
        $(".header").addClass("header-transition");
        $(".hamburger").addClass("hamburger-transition");
        $(".header-text").addClass("header-text-transition");
    } 
    else if($(window).scrollTop() == 0) {
        $(".header").removeClass("header-transition");
        $(".hamburger").removeClass("hamburger-transition");
        $(".header-text").removeClass("header-text-transition");
    }

    // Section link activation
    if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() < $(window).height() * 2) {
        $(".about-me-link").addClass("active");
        $(".about-me-menu-link").addClass("active-menu");
    } else {
        $(".about-me-link").removeClass("active");
        $(".about-me-menu-link").removeClass("active-menu");
    }
    if ($(window).scrollTop() > $(window).height() * 2 && $(window).scrollTop() < $(window).height() * 3) {
        $(".projects-link").addClass("active");
        $(".projects-menu-link").addClass("active-menu");
    } else {
        $(".projects-link").removeClass("active");
        $(".projects-menu-link").removeClass("active-menu");
    }

    // Toggle bobbing to prevent overflow
    // if ($(window).width() > 575 && $(window).scrollTop() > $(window).height() * .5) {
    //     $(".scroll-down").removeClass("bob");
    // }
    // else if ($(window).width() > 575 && $(window).scrollTop() < $(window).height() * .5) {
    //     $(".scroll-down").addClass("bob");
    // }
});

$(".about-me-link").click(function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});
$(".about-me-menu-link").click(function() {
    menuToggle();
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});

$(".scroll-down").click(function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});

$(".projects-link").click(function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
});
$(".projects-menu-link").click(function () {
    menuToggle();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
});


// Function meant for menu toggling, on click, it checks to see if menu is open, if not, open, is so, close
// If open, it allows bob to continue, if it is being opened, then bob is turned off
// If open, overflow is hidden to prevent scrolling, if it is being opened, then overflow is reset to normal.
function menuToggle() {
    if ($(".menu").hasClass("menu-display")) {
        $(".menu").removeClass("menu-display");
        $(".scroll-down").addClass("bob");
        $('html, body').css({
            overflow: 'auto',
        });
    } else {
        $(".menu").addClass("menu-display");
        $(".scroll-down").removeClass("bob");
        $('html, body').css({
            overflow: 'hidden',
        });
    }
}

