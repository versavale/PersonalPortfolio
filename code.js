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


$(window).scroll(function () {
    var y = $(window).scrollTop(),
        x = $('#skillbar_html').offset().top - 220;
    if (y > x) {
        $("#skillbar_html").animate({width:'85%'},1500);
        $("#skillbar_css").animate({width:'80%'},1500);
        $("#skillbar_git").animate({width:'75%'},1500);
        $("#skillbar_js").animate({width:'65%'},1500);
        $("#skillbar_react").animate({width:'0%'},1500);
        $("#skillbar_ruby").animate({width:'0%'},1500);
        $("#skillbar_mot").animate({width:'100%'},1500);
    }
});

window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY >= 50) {
      console.log("pop");
      document.getElementById("myBtn").style.display = "block";
      navbar.classList.add("nav--color");
      navbar.classList.remove("nav--trans");
    } else {
      navbar.classList.remove("nav--color");
      navbar.classList.add("nav--trans");
      document.getElementById("myBtn").style.display = "none";
      console.log("pooop");
    }
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
