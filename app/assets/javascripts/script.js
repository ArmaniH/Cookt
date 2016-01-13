$(document).ready(function(){
  // $("#recipeSearch").on("click", function(){
  var ingredientSearch = $('#ingredients');
  var ingredientQuery = "apple"//ingredientSearch.val();
  // var calorieSearch = $('#calories');
  // var calorieQuery = calorieSearch.val();

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
      // alert(response['hits'])
    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    });
  // });
});
  var i = 1;
  function addToRecipeList(recipe, i){
  // console.log(recipe.label);
  // console.log(recipe.image);
  // $(this).attr('id', "" + (i + 1))
  var $recipe = $('<a href="' +recipe.url +'"> </a>')
    $recipe.append('<h2>' + recipe.label + '</h2>')
    // $recipe.append('<a href="' +recipe.url +'"> </a>')
    $recipe.append('<p>' + recipe.source + '</p>')
    $recipe.append('<img src="'+recipe.image+'"/>')
    // $(".jsrecipes").each(function(i) {
    // $('.jsrecipes').attr('id', "" + (i + 1));
    $('.jsrecipes').append($recipe)

    i++

  $('.jsrecipes').on('click', function(){
    $('iframe').show('slow')// $('#recipe_url').append(recipe.url)
    $('#iframe').attr('src', recipe.url)
    return false;

  });

  $('#closeIframe').on('click', function(){
    $('iframe').hide('fast')
    return false;
  });

  // function breakout() {
  //   if (window.top != window.location) {
  //       window.top.location = "";
    // }
    // $('#breakIframe').on('click', breakout()
    //
    // }
// });
};
