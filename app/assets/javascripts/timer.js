$(document).ready(function(){

  $('button').one('click', function(event){
    var hours = $(".js-hours").val();
    var minutes = $(".js-minutes").val();
    var seconds = $(".js-seconds").val();
    var $timeLeft = $(".js-time-left");

    function updateTimeLeft(hours, minutes, seconds, event){
      $timeLeft.html(hours + " : " + minutes + " : " + seconds);
    }

    var timer = setInterval(function(){
      if(hours === 0 && minutes === 0 && seconds === 0){
        alert("done");
        return clearInterval(timer);
        $(this).one()
      }
      if(seconds === 0){
        seconds = 60;
        minutes = minutes - 1;
        $(this).one()
      };
      if(minutes === 0){
        mintues = 59;
        hours = hours - 1;
        $(this).one()
      };
      if(hours === 0){
        // hours = 0;
        mintues = 0;
        $(this).one()
      };
      seconds = seconds - 1;
      updateTimeLeft(hours,minutes,seconds);
      $(this).off('click')
    },1000)
        event.preventDefault
  });

  $('#addTimer').click(function(event, i){
    $('.timerContainer:last').clone().after().appendTo('#timerDiv')
    $(".timerContainer").each(function(i) {
      $(this).attr('id', "" + (i + 1));
    });
      event.preventDefault
  });
  $('#removeTimer').click(function(event){
    $('.timerContainer:last').remove()
        event.preventDefault
  });
});
