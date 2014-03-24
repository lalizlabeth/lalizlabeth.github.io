$(document).ready(function() {
  var firstScroll = false;

  function toggleNavigation(navigationState) {
    var width;
    $(".general-navigation-item").each(function(index) {
      if (navigationState === "open") {
        width = -$(this).width();
      } else {
        width = 0;
        if (index === 0) {
          width = 65;
        } 
      }
      $("#logo").toggleClass("open");
      $(this).css("margin-left", width);
    });
  }

  $("#logo").click(function(evt) {
    var navState = $("#logo").attr("class");
    toggleNavigation(navState);
  });

  $(window).scroll(function() {
    var scrollHeight = $(document).scrollTop();
    if (firstScroll === false) {
      toggleNavigation("open");
      firstScroll = true;
    }
    // if (scrollHeight === 0) {
    //   toggleNavigation("closed");
    //   firstScroll = false;
    // } else {
    //   if (firstScroll === false) {
    //     toggleNavigation("open");
    //     firstScroll = true;
    //   }
    // }
  });
});