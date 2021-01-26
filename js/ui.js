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

  // faq
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

  // product
  var tab = $('.tab-type-1');
  var tabBtn = tab.find('a');

  tabBtn.on('click', function(){
    var $this = $(this);
    var $target = $this.attr('data-target');
    var parent = $this.parent('li');
    var sibl = parent.siblings('li');

    $($target).siblings('li').hide();
    $($target).fadeIn(150);

    $this.addClass('active');
    sibl.find('a').removeClass('active');

    return false;
  });

  // scroll event
  // $(window).on('scroll', function(){
  //   var win = $(this).scrollTop();
  //   $('.product-list').css('transform', 'rotateY('+(0.1*win)+'deg)')
  // });

  // 조건문
  // var truefalse = false;

  // if(truefalse){
  //   console.log('true');
  // }else {
  //   console.log('false');
  // }

  // 반복문
  // tabBtn.each(function(e){
    
  // });



  // addClass
  // removeClass
  // toggleClass

});