$( document ).ready(function() {

var top1 = $('#hero').offset().top;
var top2 = $('#about').offset().top;
var top3 = $('#projects').offset().top;
var top4 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2-150) {
    $('#navbar').css('background-color', 'transparent');
  } else if (scrollPos >= top2-150) {
    $('#navbar').css('background-color', '#FF0844');
  }
});

});