$(document).ready(function(){

  $('#login--btn').click(function() {
  $('.cta--container').toggle(200, 'swing');
  $('.brand--logo').toggle(200, 'swing');
  $('#login--pannel').toggleClass("active", 300, 'swing');
  
  });

  $('.close--icon').click(function() {
  $('.cta--container').toggle(200, 'swing');
  $('.brand--logo').toggle(200, 'swing');
  $('#login--pannel').toggleClass("active", 300, 'swing');

  });

});
