$(function(){

  var body = $('body');
  var menu = $('header .menu');
  var menuWrap = $('#menuWrap');
  var dim = $('.dim');
  
  menu.on('click', function(){
    menu.toggleClass('active');
    menuWrap.toggleClass('active');
    body.toggleClass('active');
    return false;
  });

  dim.on('click', function(){

    // menu.trigger('click');

    menu.removeClass('active');
    menuWrap.removeClass('active');
    body.removeClass('active');

  });
  
  /*
  $('header .menu').on('click', function(){
    $('header .menu').toggleClass('active');
    $('#menuWrap').toggleClass('active');
    $('body').toggleClass('active');
    return false;
  });
  */

  var faq = $('.faq-list');
  var faqBtn = faq.find('.q');

  faqBtn.on('click', function(){
    var $this = $(this);
    var parent = $this.parent('li');
    var sibl = parent.siblings('li');

    parent.toggleClass('active');
    sibl.removeClass('active');

    // $(this).parent('li').toggleClass('active');
    // $(this).parent('li').siblings('li').removeClass('active');

    return false;
  });

});