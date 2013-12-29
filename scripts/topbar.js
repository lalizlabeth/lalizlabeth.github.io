$(document).ready(function() {

  var nav_opened = false;

  // Controls navigation
  $('#nav-trigger').click(function(evt) {
    var topHeight;
    if (nav_opened === false) {
      $('.case-study-menu-item').each(function(index){
        topHeight = 70 * (index + 1);
        $(this).css({
          'top': topHeight,
        });
      });
      nav_opened = true;
    } else {
      $('.case-study-menu-item').css({
        'top': 0,
      });
      nav_opened = false;
    }
  });

});