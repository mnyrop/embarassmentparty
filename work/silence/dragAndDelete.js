// jJQUERY STUFF FOR PAGE INTERACTION
var state = "start";
if(state === 'start') {
  $("em").draggable();
  $("body").css('cursor','move');
}

$("#dragButton").on('click', function() {
  state = "drag";
  $("em").draggable('enable');
  $("body").css('cursor','move');
});

$("#deleteButton").on('click', function() { 
  state = 'delete';
  $("em").draggable('disable');
  $("body").css('cursor','text');
});

$("em").on("click", function() {
    if(state === 'delete'){
      $(this).css('color', '#fff');
      $(this).css('background-color', 'fff');
    }
});