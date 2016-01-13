$(document).ready(function(){
  $('.click').click(function () {
      var rawAmount = $('#request').val();
      var cleanAmount = rawAmount.split(':');
      var totalAmount = parseInt(cleanAmount[0] | 0) * 60 + parseInt(cleanAmount[1] | 0);
       $('#request').val(" ");

      var loop, theFunction = function () {

          totalAmount--;

          if (totalAmount == 0) {

              clearInterval(loop);
          }
          var minutes = parseInt(totalAmount/60);
          var seconds = parseInt(totalAmount%60);

          if(seconds < 10)
              seconds = "0"+seconds;
          $('.clock').text(minutes + ":" + seconds);
      };

      var loop  = setInterval(theFunction, 1000);

  })

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
