$(function(){

  var body = $('body');
  var menu = $('header .menu');
  var menuWrap = $('#menuWrap');
  
  menu.on('click', function(){
    menu.toggleClass('active');
    menuWrap.toggleClass('active');
    body.toggleClass('active');
    return false;
  });
  
  /*
  $('header .menu').on('click', function(){
    $('header .menu').toggleClass('active');
    $('#menuWrap').toggleClass('active');
    $('body').toggleClass('active');
    return false;
  });
  */

});