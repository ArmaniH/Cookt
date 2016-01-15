$(document).ready(function(){

  var url = "https://api.clockworksms.com/http/send.aspx?key=0090373c66614705b4f2fdd41c10a28fc126f76f&to=+18048688653&content=Hello+World"
  $.ajax({
    url: url,
    type: "POST",
    dataType: "jsonp"
  }).done(function(response){
    console.log(response)
})





  // $("#recipeSearch").on("click", function(){
  var ingredientSearch = $('#ingredients');
  var ingredientQuery = "apple"//ingredientSearch.val();

  var url = "https://api.edamam.com/search?q="+ingredientQuery + "&id=ec41a8fc&key=6b6789b4bd25173849ec364d5810f34f.json"
  $.ajax({
    url: url,
    type: "get",
    dataType: "jsonp"
  }).done(function(response){
    console.log(response['hits'])
    var hits = response['hits']
    for (var i = 0; i < hits.length; i++) {
      var hit = hits[i]
      addToRecipeList(hit.recipe)
      event.preventDefault();
    }
  }).fail(function(){
    console.log("Ajax request fails!")
  }).always(function(){
    console.log("This always happens regardless of successful ajax request or not.")
  });
  // });

function addToRecipeList(recipe){
  var $recipe = $('<a href="' +recipe.url +'"> </a>')
  $recipe.append('<h2>' + recipe.label + '</h2>')
  $recipe.append('<p>' + recipe.source + '</p>')
  $recipe.append('<img src="'+recipe.image+'"/>')
  $('.jsrecipes').append($recipe)
    $("a").click(function(event) {
      $('iframe').show('slow').attr('src', $(this).attr('href'));// $('#recipe_url').append(recipe.url)
      event.preventDefault();
    });
  }

  $('#closeIframe').on('click', function(){
    $('iframe').hide('fast')
    // return false;
  });
  // function breakout() {
  //   if (window.top != window.location) {
  //       window.top.location = "";
  // }
  //
  // }

});
