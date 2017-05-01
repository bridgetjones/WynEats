Rails.application.routes.draw do
  resources :restaurants
  # resources :photos
root 'home#main_page'
# get '/:userinput', to: 'home#index', as: 'userinput'
get '/search'  => 'usersearch#index' , as: 'search'
post '/text' => 'usersearch#text' , as: 'text'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
