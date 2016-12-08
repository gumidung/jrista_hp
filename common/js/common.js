$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = 380;
        if ($(window).scrollTop() > navHeight ) {
            jQuery('.nav-scroll').addClass(' fixed');
        }
        else {
            jQuery('.nav-scroll').removeClass(' fixed');
        }
    });
    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $('.home').click(function(){
        window.location.href = $('.home a').attr("href");
    })
    $('.search').click(function(){
        window.location.href = $('.search a').attr("href");
    })
    $('.award').click(function(){
        window.location.href = $('.award a').attr("href");
    })
    $('.file-edit').click(function(){
        window.location.href = $('.file-edit a').attr("href");
    })
    $('.social-network').click(function(){
        window.location.href = $('.social-network a').attr("href");
    })
    $('.lock').click(function(){
        window.location.href = $('.lock a').attr("href");
    })
});