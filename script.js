var lastScrollTop = 0;
var body = $("body");

$(window).scroll(function (){
    var top = ($(window).scrollTop() || body.scrollTop());
    var nav = $("nav");

    setTimeout(function(){
        if (top > lastScrollTop) {
            nav.addClass("hide");
        } else {
            nav.removeClass("hide");
        }
        lastScrollTop = top;
    }, 100);
});