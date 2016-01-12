$(document).ready(function(){
  $("#recipeSearch").on("click", function(){
    var ingredientSearch = $('#ingredients');
    var ingredientQuery = ingredientSearch.val();
    // var calorieSearch = $('#calories');
    // var calorieQuery = calorieSearch.val();
    var url = "https://api.edamam.com/search?q="+ingredientQuery + "&id=ec41a8fc&key=6b6789b4bd25173849ec364d5810f34f.json"
    $.ajax({
      url: url,
      type: "get",
      dataType: "jsonp"
      // test = response['hits']
    }).done(function(response){
      // $('p').append(response)
          event.preventDefault();
      console.log(response)
      alert(response['hits'])
    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    });
  });
});
