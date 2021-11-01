Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :categories, only: [:create, :index, :new]
  namespace :api do
    resources :events, only: [ :index ]
    # get '/events' => "events#show"
   post '/events/' => "events#create"
    # get '/events/:start_date', to: "events#show"
    # get '/events/:is_active', to: "events#show"
    # resources :events, params: :start_date

  
  end

end
