$(document).ready(function(){

  $('#profile--btn').hide();
  $('#profile--pannel').hide();
  $('#control--pannel').hide();
  // $('.room--lighting').fadeOut();

  $('#menu--btn').click(function(){
    $('#menu--btn').toggleClass("open");
    $('.list--container').toggleClass("active", 500, 'swing');
    $('#login--pannel').removeClass("active", 300, 'swing');
    $('.cta--container').show(200, 'swing');
    $('#profile--pannel').hide(300, 'swing');
    $('.brand--logo').removeClass("active", 200, 'swing');

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

  $('#control--room, .cta--button').click(function() {
    $('.control--hero--img').toggleClass("active", 300, 'swing');
    $('.hero--img').toggleClass("active", 500, 'swing');
    $('.cta--container').toggleClass("active", 500, 'swing');
    $('.brand--logo').delay(200).toggleClass("active", 300, 'swing');
    $('.list--item').toggleClass("active", 500, 'swing');
    $('#control--pannel').toggle(300, 'swing');
    $('#menu--btn').toggleClass("open");
    $('.list--container').toggleClass("active", 500, 'swing');
    $('.mobile--hero--img').toggleClass("active", 500, 'swing');

  });

  $('.brand--logo, .login--logo').click(function() {
    $('.cta--container').removeClass("active", 500, 'swing');
    $('.hero--img').removeClass("active", 500, 'swing');
    $('.list--item').removeClass("active", 500, 'swing');
    $('.brand--logo').removeClass("active", 500, 'swing');
    $('.control--hero--img').removeClass("active", 500, 'swing');
    $('#login--pannel').removeClass("active", 500, 'swing');
    $('#profile--pannel').removeClass("active", 500, 'swing');
    $('#control--pannel').hide(200, 'swing');
    $('.mobile--hero--img').removeClass("active", 200, 'swing')
  });

  $('#lighting').click(function() {
    $('#lighting').toggleClass("active", 300, 'swing');
    $('#cameras').removeClass("active", 300, 'swing');
    $('#alarms').removeClass("active", 300, 'swing');
    $('#music').removeClass("active", 300, 'swing');
    $('#temp').removeClass("active", 300, 'swing');
    $('.room--lighting').toggleClass("active", 500, 'swing');
  });
  $('#cameras').click(function() {
    $('#cameras').toggleClass("active", 300, 'swing');
    $('#lighting').removeClass("active", 300, 'swing');
    $('#alarms').removeClass("active", 300, 'swing');
    $('#music').removeClass("active", 300, 'swing');
    $('#temp').removeClass("active", 300, 'swing');
    $('.room--lighting').removeClass("active", 500, 'swing');
  });
  $('#alarms').click(function() {
    $('#alarms').toggleClass("active", 300, 'swing');
    $('#cameras').removeClass("active", 300, 'swing');
    $('#lighting').removeClass("active", 300, 'swing');
    $('#music').removeClass("active", 300, 'swing');
    $('#temp').removeClass("active", 300, 'swing');
    $('.room--lighting').removeClass("active", 500, 'swing');
  });
  $('#music').click(function() {
    $('#music').toggleClass("active", 300, 'swing');
    $('#cameras').removeClass("active", 300, 'swing');
    $('#lighting').removeClass("active", 300, 'swing');
    $('#temp').removeClass("active", 300, 'swing');
    $('#alarms').removeClass("active", 300, 'swing');
    $('.room--lighting').removeClass("active", 500, 'swing');
  });
  $('#temp').click(function() {
    $('#temp').toggleClass("active", 300, 'swing');
    $('#cameras').removeClass("active", 300, 'swing');
    $('#lighting').removeClass("active", 300, 'swing');
    $('#music').removeClass("active", 300, 'swing');
    $('#alarms').removeClass("active", 300, 'swing');
    $('.room--lighting').removeClass("active", 500, 'swing');
  });

  $('#home').click(function() {
    $('.list--container').toggleClass("active", 300, 'swing');
    $('.cta--container').show(200, 'swing');
    $('.brand--logo').show(200, 'swing');
    $('#login--pannel').hide(300, 'swing');
    $('#profile--pannel').hide(300, 'swing');
    $('.control--hero--img').toggleClass("active", 300, 'swing');
    $('.hero--img').toggleClass("active", 500, 'swing');
    $('.cta--container').toggleClass("active", 500, 'swing');
    $('#control--pannel').toggle(300, 'swing');
    $('#menu--btn').toggleClass("open");
    $('.mobile--hero--img').toggleClass("active", 200, 'swing')

  });

  $('.kitchen--input').click(function(){
    $('#kitchen--icon').toggleClass("active", 500, 'swing');
  });

  $('.dining--input').click(function(){
    $('#dining--icon').toggleClass("active", 500, 'swing');
  });

  $('.bedroom--input').click(function(){
    $('#bedroom--icon').toggleClass("active", 500, 'swing');
  });

  $('.garage--input').click(function(){
    $('#garage--icon').toggleClass("active", 500, 'swing');
  });

  $('.bathroom--input').click(function(){
    $('#bathroom--icon').toggleClass("active", 500, 'swing');
  });

  $('.living--input').click(function(){
    $('#living--icon').toggleClass("active", 500, 'swing');
  });

});
