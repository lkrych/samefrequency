Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'static_pages#root'
  get '/api/stations/search', to: 'api/stations#search'
  get '/api/stations/stream', to: 'api/stations#stream'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :stations, only: [:index]
  end
end
