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
    } else {
        $(".about-me-link").removeClass("active");
    }

    if ($(window).scrollTop() > $(window).height() * 2 && $(window).scrollTop() < $(window).height() * 3) {
        $(".projects-link").addClass("active");
    } else {
        $(".projects-link").removeClass("active");
    }
});

$(".about-me-link").click(function() {
    $(".menu").removeClass("menu-display");
    document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start"});
    // $(".projects-link").removeClass("active");
    // $(".about-me-link").addClass("active");
});
$(".projects-link").click(function () {
    $(".menu").removeClass("menu-display");
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    // $(".about-me-link").removeClass("active");
    // $(".projects-link").addClass("active");
});



function menuToggle() {
    if($(".menu").hasClass("menu-display")) {
        $(".menu").removeClass("menu-display");
        // $('html, body').css({
        //     overflow: 'auto',
        //     height: 'auto'
        // });
        

    } else {
        $(".menu").addClass("menu-display");
        // $('html, body').css({
        //     overflow: 'hidden',
        //     height: '100%'
        // });
        

    }
}

