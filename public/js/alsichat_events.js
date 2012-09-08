/**
  File that holds all the event bindings.
*/
$(function() {
  /* globals stats hover effect */
  $('#header-box').hover(function() {
    $globalStats.stop().fadeOut();
    $globalStats.fadeIn();
  }, function() {
    $globalStats.stop().fadeIn();
    $globalStats.fadeOut();
  });
  $newThreadBtn.hover(function() {
    $newThreadInput.stop().fadeOut();
    $newThreadInput.fadeIn();    
  }, function() {
    $newThreadInput.stop().fadeIn();
    $newThreadInput.fadeOut();
  });
});