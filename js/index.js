$(document).ready(function () {

    DrawCircle()
    DrawCircle2()




})

function DrawCircle() {
    for (var i = 0; i < 1500; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".circle-container").append("<div class='circle' style='left:" + windowWidth + "px;top:" + windowHeight + "px;'></div>")
    }

}
function DrawCircle2() {
    for (var i = 0; i < 500; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".circle-container").append("<div class='circle2' style='left:" + windowWidth + "px;top:" + windowHeight + "px;'></div>")
    }

}
