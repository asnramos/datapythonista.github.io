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

  var typed = $(".typed");
  $(function() {
    typed.typed({
      strings: ["datapythonista", "Marc Garcia"],
      typeSpeed: 300,
      loop: true,
    });
  });

});
