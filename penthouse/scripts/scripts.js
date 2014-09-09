// Smooth scrolling source

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


// Navigation appears
$(window).scroll(function() {
  var scrollHeight = $(document).scrollTop();
  var bodyHeight = $("body").height();
  if (scrollHeight >= bodyHeight) {
    $("#navigation").removeClass("hidden");
  } else {
    $("#navigation").addClass("hidden");
  }
});