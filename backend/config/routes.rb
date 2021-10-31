Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :categories, only: [:create, :index, :new]
  namespace :api do
   resources :events, only: [ :index, :create ]
   get '/events/:start_date', to: "events#show"
    # resources :events, params: :start_date

  resources :users, only: [ :index, :new, :create, :destroy ]
  end

end
