/**
  File that holds the code javascripty stuff.
*/
$(function() {
  /* frequently accessed dom elements. */
  $globalStats = $('#global-stats');
  $newThreadInput = $('#new-thread-input');
  $threadList = $('#thread-list');
  $blackBox = $('#black-box');
  $newThreadBtn = $('#start-thread-btn');
  gridSize = 14;

  /* fixing individual scrollable area heights */
  setThreadListHeight();
  $(window).resize(function() {
    setThreadListHeight();
  });
});

function setThreadListHeight() {
  var winH = $(window).height();
  var blackBoxH = $blackBox[0].offsetHeight;
  console.log(winH + ' ' + blackBoxH);
  $threadList.find('ul').height(winH-blackBoxH-gridSize);
}