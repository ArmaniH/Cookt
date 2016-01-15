$(document).ready(function(){
  var i = 1
  $('#addTimer').click(function(i){
    $('#timerContainer').after('<div id="timerContainer"> <button id="removeTimer">Remove Timer</button> <div class="title"> <p></p> </div> <div class="clock"> <p>0:00</p> </div> <input id="title" type="text" placeholder="Enter item here"> <input id="request" type="text" placeholder="Enter an amount here"> <a href="#" class="click">Click here</a> </div>')//.attr('id', "" +i);
    // $("#timerContainer").each(function(event, i) {
    // });
    // event.preventDefault
    i++
  });
  $('#timerDiv').on('click','#removeTimer', function(){
    $(this).parent().remove();
    // event.preventDefault
  });
  $('.click').click(function () {
      var inputAmount = $('#request').val();
      var inputTitle = $('#title').val();
      var cleanAmount = inputAmount.split(':');
      var totalAmount = parseInt(cleanAmount[0] | 0) * 60 + parseInt(cleanAmount[1] | 0);
       $('#request').val(" ");
       $('#title').val(" ");

      var loop, theFunction = function () {
          totalAmount--;
          if (totalAmount == 0) {
              clearInterval(loop);
          }
          // pause: function(){
          //   clearInterval(this.interval);
          //   delete this.interval;
          // },
          // resume: function(){
          //   if (!this.interval) this.start()
          // }

          // var hours = parseInt(totalAmount/3600);
          var minutes = parseInt(totalAmount/60);
          var seconds = parseInt(totalAmount%60);
          var title = inputTitle;
          if(seconds < 10)
              seconds = "0"+seconds;
          $('.clock').text(minutes + ":" + seconds);
          $('.title').text(title);
      };

      var loop  = setInterval(theFunction, 1000);
  })

});
