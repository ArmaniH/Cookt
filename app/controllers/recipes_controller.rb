class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @recipes }
    end
  end

  # GET /recipes/1
  # GET /recipes/1.json
  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @recipe }
    end
  end

  def recipe_params
      params.require(:recipe).permit(:hits, :recipie, :label, :image)
    end
end
