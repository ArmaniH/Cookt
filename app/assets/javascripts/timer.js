$(document).ready(function(){

var hours = $(".js-hours").val();
var minutes = $(".js-minutes").val();
var seconds = $(".js-seconds").val();
var $timeLeft = $(".js-time-left");

function updateTimeLeft(hours, minutes, seconds){
  $timeLeft.html(hours + " hours, " + minutes + " minutes, " + seconds + " seconds ");
}

// $('button').click(function){
var timer = setInterval(function(){
  if(hours === 0 && minutes === 0 && seconds === 0){
    alert("done");
    return clearInterval(timer);
  }
  if(seconds === 0){
    seconds = 60;
    minutes = minutes - 1;
  };
  if(minutes === 0){
    mintues = 59;
    hours = hours - 1;
  };
  if(hours === 0){
    hours = 0;
    mintues = 0;
  }
  seconds = seconds - 1;
  updateTimeLeft(hours,minutes,seconds);
},1000)
});
