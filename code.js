$( document ).ready(function() {

$('.js-about').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    });
});

$('.js-home').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#home").offset().top
    });
});

$('.js-skills').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    });
});

$('.js-projects').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    });
});

$('.js-contact').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    });
});

});