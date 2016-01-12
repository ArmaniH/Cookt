class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @ingredients }
  end

  def show
    @ingredients = Ingredient.find( params[:id] )
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @ingredients, include: :recipes }
      end
    end

end
