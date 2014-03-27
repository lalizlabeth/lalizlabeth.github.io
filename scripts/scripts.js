$(document).ready(function() {
  var firstScroll = false;

  function toggleNavigation(navigationState) {
    var width;
    $(".general-navigation-item").each(function(index) {
      if (navigationState === "open") {
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
    toggleNavigation(navState);
  });

  $(window).scroll(function() {
    var scrollHeight = $(document).scrollTop();
    if (scrollHeight === 0) {
      toggleNavigation("closed");
      firstScroll = false;
    } else {
      if (firstScroll === false) {
        toggleNavigation("open");
        firstScroll = true;
      }
    }
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-49460505-1', 'elizabethylin.com');
ga('send', 'pageview');