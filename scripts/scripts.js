$(document).ready(function() {

  if($(window).width() >= 1024) {
    $(".general-navigation-item").each(function(index) {
      var width = Math.round($(this).width());
      $(this).css("width", width);
    });
  }

  function toggleNavigation(navigationState) {
    var width;
    $(".general-navigation-item").each(function(index) {
      if (navigationState === true) {
        width = -$(this).width()-$("#logo").width();
        $("#logo").removeClass("open");
      } else {
        width = 0;
        if (index === 0) {
          width = $("#logo").width();
        }
        $("#logo").addClass("open");
      }
      $(this).css("margin-left", width);
    });
  }

  $("#logo").click(function(evt) {
    var navState = $("#logo").attr("class");
    if (navState === "open") {
      toggleNavigation(true);
    } else {
      toggleNavigation(false);
    }
  });

  window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    var scroll = this.oldScroll > this.scrollY;
    if (scroll === true) {
      toggleNavigation(false);
    } else {
      toggleNavigation(true);
    }
    this.oldScroll = this.scrollY;
  }
});