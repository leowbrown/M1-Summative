$(document).ready(function(){

  $('#profile--btn').hide();
  $('#profile--pannel').hide();

  $('#menu--btn').click(function(){
    $('#menu--btn').toggleClass("open");
    $('.brand--logo').toggleClass("active", 300);
    $('.list--container').toggleClass("active", 500, 'swing');
    $('#login--pannel').removeClass("active", 300, 'swing');
    $('.cta--container').show(200, 'swing');
    $('#profile--pannel').hide(300, 'swing');
  });

  $('#login--btn').click(function() {
    $('.cta--container').toggle(200, 'swing');
    $('#login--pannel').toggleClass("active", 300, 'swing');
  });

  $('.signin--button').click(function() {
    $('.login--container').toggle(200, 'swing');
    $('#profile--pannel').toggle(300, 'swing');
    $('#login--btn').hide();
    $('#profile--btn').show();
    $('.cta--header').html("Welcome Back");
    $('.cta--subheader').html("Its good to see you again.")
    $('.cta--button').html("Control room");
  });

  $('#profile--btn').click(function() {
    $('#profile--pannel').toggle(300, 'swing');
    $('#login--pannel').toggleClass("active", 300, 'swing');
    $('.login--container').hide();
    $('.cta--container').toggle(200, 'swing');
  });

  $('#close--btn, .login--logo').click(function() {
    $('.cta--container').show(200, 'swing');
    $('.brand--logo').show(200, 'swing');
    $('#login--pannel').toggleClass("active", 300, 'swing');
    $('#profile--pannel').hide(300, 'swing');
  });

  $('.sign--out--btn').click(function() {
    $('.login--container').toggle(200, 'swing');
    $('#profile--pannel').toggle(300, 'swing');
    $('#login--btn').show();
    $('#profile--btn').hide();
    $('.cta--header').html("A Smarter Home");
    $('.cta--subheader').html("IFor when you're too bosy to worry about the little things.")
    $('.cta--button').html("How we can help.");
  });

  $('#control--room').click(function() {
    $('.control--hero--img').toggleClass("active", 500, 'swing');
    $('.hero--img').toggleClass("active", 500, 'swing');
    $('.cta--container').toggleClass("active", 500, 'swing');
    $('.brand--logo').toggleClass("active", 300, 'swing');
    $('.list--item').toggleClass("active", 500, 'swing');
  });

  $('.brand--logo, .login--logo').click(function() {
    $('.cta--container').removeClass("active", 500, 'swing');
    $('.hero--img').removeClass("active", 500, 'swing');
    $('.list--item').removeClass("active", 500, 'swing');
    $('.brand--logo').removeClass("active", 500, 'swing');
    $('.control--hero--img').removeClass("active", 500, 'swing');
    $('#login--pannel').removeClass("active", 500, 'swing');
    $('#profile--pannel').removeClass("active", 500, 'swing');
  });

});
