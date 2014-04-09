$(document).ready(function() {
  var firstScroll = false;

  function toggleNavigation(navigationState) {
    var width;
    $(".general-navigation-item").each(function(index) {
      if (navigationState === true) {
        width = -$(this).width()-$("#logo").width();
      } else {
        width = 0;
        if (index === 0) {
          width = $("#logo").width();
        } 
      }
      $("#logo").toggleClass("open");
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

  $(window).scroll(function() {
    var scrollHeight = $(document).scrollTop();
    if (scrollHeight === 0) {
      toggleNavigation(false);
      firstScroll = false;
    } else {
      if (firstScroll === false) {
        toggleNavigation(true);
        firstScroll = true;
      }
    }
  });
});