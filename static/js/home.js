/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  $(window).load(function() {
    if (window.innerWidth > 960) {
      $("#header").css("background-image", 'url("/static/img/home-bg.jpg")');
    } else {
      $("#header").css("background-image", 'none');
    }
  });
  $(window).resize(function() {
    if (window.innerWidth > 960) {
      $("#header").css("background-image", 'url("/static/img/home-bg.jpg")');
    } else {
      $("#header").css("background-image", 'none');
    }
  });


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });


  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });


  var typed = $(".typed");
  $(function() {
    typed.typed({
      strings: ["datapythonista", "Marc Garcia"],
      typeSpeed: 300,
      loop: true,
    });
  });

});
