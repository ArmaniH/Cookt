class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @recipes }
    end
  end

  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @recipe }
    end
  end

  def recipe_params
      params.require(:recipe).permit(:hits, :recipe, :label, :image)
    end
end
