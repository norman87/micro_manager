Rails.application.routes.draw do
  resources :campaigns
  resources :users

  delete 'campaigns/', :to => 'campaigns#destroy_many'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
