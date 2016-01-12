Rails.application.routes.draw do
  root to: 'recipes#index'
  get '/recipes', to: 'recipes#index'
  resources :recipes do
    resources :ingredients
  end
end
