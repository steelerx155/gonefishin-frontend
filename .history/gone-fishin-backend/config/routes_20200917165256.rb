Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do 
     namespace :v1 do 
      # resources :destinations do
      #    resources :features
      #    resources :comments
      #   #  resources :trips 
      # end
      
        resources :destinations do
          resources :features
          resources :comments
        end
      end
    end
      end
    end
