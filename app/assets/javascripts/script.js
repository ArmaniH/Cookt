$(document).ready(function(){

  $('#recipeSearch').click(function(event){
  var ingredientSearch = $('#ingredients');
  var ingredientQuery = ingredientSearch.val();
  $('.jsrecipes').empty('');
  $('#ingredients').val('');

  var url = "https://api.edamam.com/search?q="+ingredientQuery + "&id={ENV['edamam_app_key]}&key={ENV['edamam_api_key']}.json"
  $.ajax({
    url: url,
    type: "get",
    dataType: "jsonp"
  }).done(function(response){
    console.log(response['hits'])
    var hits = response['hits']
    for (var i = 0; i < hits.length; i++){
      var hit = hits[i]
      addToRecipeList(hit.recipe)
    }}).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    })
  });
  event.preventDefault();

function addToRecipeList(recipe){
  var $recipe = $('<a href="' +recipe.url +'"> </a>')
  $recipe.append('<h2>' + recipe.label + '</h2>')
  $recipe.append('<p>' + recipe.source + '</p>')
  $recipe.append('<img src="'+recipe.image+'"/>')
  $('.jsrecipes').append($recipe)
    $("a").click(function(event){
      $('iframe').show('slow').attr('src', $(this).attr('href'));// $('#recipe_url').append(recipe.url)
      event.preventDefault();
    });
  }

  $('#closeIframe').on('click', function(){
    $('iframe').hide('fast')
  });
  // function breakout() {
  //   if (window.top != window.location) {
  //       window.top.location = "";
  // }
  //
  // }

})
