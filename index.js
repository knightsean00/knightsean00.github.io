$(window).scroll(function () {
    console.log($(window).scrollTop())
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
});

function menuToggle() {
    alert("Toggle detected");
}




var colors = ['#3498db', '#1abc9c', '#FF8484'];

function choose() {
    let index = Math.floor(colors.length * Math.random());

    // document.getElementById("hero").style.backgroundColor = colors[index];
    let waves = document.getElementsByClassName("wave");
    var i;
    for(i = 0; i < waves.length; i++) {
        waves[i].style.fill = colors[index];
    }

    // document.getElementById("color").innerHTML = " " + colors[index];
}

$("#parallax").mousemove(function (e) {
    parallaxIt(e, "#wave", -100);
});

function parallaxIt(e, target, movement) {
    var $this = $("#parallax");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}


// function waveGen() {
//     humps = 5;
//     height = .1 * screen.height;
//     width = screen.width;

//     output = ""

//     var i;
//     for(i = 0; i < humps; i++) {

//     }
// }