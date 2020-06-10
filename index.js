$(window).scroll(function () {
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
});

$(".about-me-link").click(function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});
$(".about-me-menu-link").click(function() {
    $(".menu").removeClass("menu-display");
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});

$(".scroll-down").click(function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
});

$(".projects-link").click(function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
});
$(".projects-menu-link").click(function () {
    $(".menu").removeClass("menu-display");
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
});



function menuToggle() {
    if($(".menu").hasClass("menu-display")) {
        $(".menu").removeClass("menu-display");
        $(".scroll-down").addClass("bob");
        // $('html, body').css({
        //     overflow: 'auto',
        //     height: 'auto'
        // });
        

    } else {
        $(".menu").addClass("menu-display");
        $(".scroll-down").removeClass("bob");
        // $('html, body').css({
        //     overflow: 'hidden',
        //     height: '100%'
        // });
        

    }
}

