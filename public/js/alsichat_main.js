$(function() {
  /* frequently accessed dom elements. */
  $globalStats = $('#global-stats');
  $newThreadTip = $('#new-thread-tip');
  $threadList = $('#thread-list');
  $blackBox = $('#black-box');
  $newThreadBtn = $('#start-thread-btn');
  gridSize = 14;

  /* fixing individual scrollable area heights */
  setThreadListHeight();
  $(window).resize(function() {
    setThreadListHeight();
  });
  /* Event Bindings */
  /* globals stats hover effect */
  $('#black-box, #global-stats').hover(function() {
    $globalStats.stop().fadeOut();
    $globalStats.fadeIn();
    $blackBox.addClass('box-shadow');
  }, function() {
    $globalStats.stop().fadeIn();
    $globalStats.fadeOut();
    $blackBox.removeClass('box-shadow');
  });
  $newThreadBtn.hover(function(e) {
    e.stopPropagation();
    $newThreadTip.stop().fadeOut();
    $newThreadTip.fadeIn();    
  }, function(e) {
    e.stopPropagation();
    $newThreadTip.stop().fadeIn();
    $newThreadTip.fadeOut();
  });
});

function setThreadListHeight() {
  var winH = $(window).height();
  var blackBoxH = $blackBox[0].offsetHeight;
  $threadList.find('ul').height(winH-blackBoxH-gridSize);
}