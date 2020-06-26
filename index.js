var colors = ['#3498db', '#9b59b6', '#2ecc71', '#1abc9c', '#FF8484'];

function choose() {
    let index = Math.floor(colors.length * Math.random());

    document.getElementById("color").style.color = colors[index]
    document.getElementById("color").innerHTML = " " + colors[index];
}