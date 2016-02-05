$(document).ready(function(){

  $('#addTimer').on('click', function(){
    $('#timerDiv').show('fast')
  });
  $('#timerDiv').on('click','#pauseTimer', function(){
    clearInterval(loop);
  });
    // event.preventDefault
  $('.timerStart').on('click', function(){
    var inputAmount = $('#request').val();
    var inputTitle = $('#title').val();
    var number = $('#phoneNumber').val();
    var cleanAmount = inputAmount.split(':');
    var totalAmount = parseInt(cleanAmount[0] | 0) * 60 + parseInt(cleanAmount[1] | 0);
     $('#request').val(" ");
     $('#title').val(" ");
     $('#phoneNumber').val(" ");

    var loop, theFunction = function() {
      totalAmount--;
      if (totalAmount == 0) {
        clearInterval(loop);
        var url = "https://api.clockworksms.com/http/send.aspx?key=0090373c66614705b4f2fdd41c10a28fc126f76f&to="+number + "&content=Come+N+Get+It!"
        $.ajax({
          url: url,
          type: "POST",
          dataType: "jsonp"
        }).done(function(response){
          console.log(response)
        })
      }
          // pause: function(){
          //   clearInterval(this.interval);
          //   delete this.interval;
          // },
          // resume: function(){
          //   if (!this.interval) this.start()
          // }

        var minutes = parseInt(totalAmount/60);
        var seconds = parseInt(totalAmount%60);
        var title = inputTitle;
        if(seconds < 10)
            seconds = "0"+seconds;
        $('.clock').text(minutes + ":" + seconds);
        $('.title').text(title);
      };

      var loop  = setInterval(theFunction, 1000);

    $('#timerDiv').on('click','#removeTimer', function(){
      clearInterval(loop);
      $('#timerDiv').hide('fast');
      $('.clock').text('0:00');
      // event.preventDefault
    });
  })
});
