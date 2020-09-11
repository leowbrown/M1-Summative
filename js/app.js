$(document).ready(function(){

  $('#login--btn').click(function() {
    $('.cta--container').toggle(200, 'swing');
    $('.brand--logo').toggle(200, 'swing');
    $('#login--pannel').toggleClass("active", 300, 'swing');
  });

  $('.signin--button').click(function() {
    $('#login--pannel').toggleClass("active", 300, 'swing');
    $('.cta--container').toggle(200, 'swing');
    $('.brand--logo').toggle(200, 'swing');
    $('.cta--header').html("Welcome Back");
    $('.cta--subheader').html("Its good to see you again.")
    $('.cta--button').html("Control room")
  });

  $('#close--btn, .login--logo').click(function() {
    $('.cta--container').toggle(200, 'swing');
    $('.brand--logo').toggle(200, 'swing');
    $('#login--pannel').toggleClass("active", 300, 'swing');
  });

});
