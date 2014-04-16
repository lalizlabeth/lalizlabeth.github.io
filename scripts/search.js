  var firstType = false;

  $(window).keypress(function(evt) {
    if (!firstType) {
      $("#search").show();
      firstType = true;
    } else {
      $("#search-input").focus();
      $("#search-help-text").html("Try searching Spotify. Press ENTER to search.");
    }
  })

  $(window).keyup(function(evt) {
    if ( (evt.keyCode === 27) && (firstType == true) ) {
      event.preventDefault();
      $("#search").hide();
      firstType = false;
    }
  });