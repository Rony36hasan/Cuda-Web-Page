function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function () {
    $(".js--services-section").waypoint(function (a) {
        "down" == a ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
    }),
        $("nav ul li a").click(function () {
            $("nav ul li a").removeClass("active"), $(this).addClass("active");
        }),
        $("nav a img.logo").click(function () {
            $("nav ul li a").removeClass("active"), $("nav ul li:first-child a").addClass("active");
        });
    mixitup(".container");
    $("a").on("click", function (a) {
        var t;
        "" !== this.hash &&
            (a.preventDefault(),
            (t = this.hash),
            $("html , body").animate({ scrollTop: $(t).offset().top }, 800, function () {
                window.location.hash = t;
            }));
    });
});
