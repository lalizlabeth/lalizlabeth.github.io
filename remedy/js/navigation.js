// Smooth scrolling source
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $("#nav").height()
        }, 500);
        return false;
      }
    }
  });
});

// Navigation appears
$(window).scroll(function() {
  var scrollHeight = $(document).scrollTop();
  var bodyHeight = $("body").height() - $("#nav").height();
  if (scrollHeight >= bodyHeight) {
    $("#nav").addClass("scroll");
  } else {
    $("#nav").removeClass("scroll");
  }
});

// Mobile menu
$(".menu-icon").on('click', function(){
	console.log("hi");
	$("#nav").toggleClass("mobile-nav");
});