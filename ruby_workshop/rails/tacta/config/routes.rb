  Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :contacts
  # get 'contacts' => 'contacts#index'
  # get 'contacts/new' => "contacts#new", as: :new_contact
  # get 'contacts/:id' => 'contacts#show', as: :contact
  # post 'contacts' => "contacts#create"
  # get 'contacts/:id/edit' => 'contacts#edit', as: :edit_contact
  # patch 'contacts/:id' => "contacts#update"
  # delete 'contacts/:id' => "contacts#destroy"

  root 'contacts#index'
end
