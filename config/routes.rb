Rails.application.routes.draw do
  root to: 'recipes#index'
  get '/recipes', to: 'recipes#index'
  resources :recipes, only: [:index, :show]
    resources :recipes do
    resources :hits
    resources :labels
    resources :images
  end
end
