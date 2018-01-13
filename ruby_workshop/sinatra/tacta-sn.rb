require 'sinatra'
require_relative 'contacts_file.rb'

set :port, 4567

get '/' do
  "<h1>Tacta Contact Manager</h1>"
end

get '/contacts' do
  @contacts = read_contacts
  @renderable_contacts = []
  @q = params['q']
  if @q
    @contacts.each do |contact|
      if contact[:name] =~ /\b#{@q}/i
        @renderable_contacts << contact
      end
    end
  else
    @renderable_contacts = @contacts
  end

  puts @contacts

  erb :'contacts/index'
end

get '/contacts/new' do
  erb :'contacts/new'
end

post '/contacts' do
  new_contact = { name: params[:name], phone: params[:phone], email: params[:email] }

  contacts = read_contacts
  contacts << new_contact
  write_contacts( contacts )

  i = contacts.length - 1

  redirect "/contacts/#{i}"
end

get '/contacts/:i/edit' do
  @i = params[:i].to_i

  contacts = read_contacts
  @contact = contacts[@i]

  erb :'contacts/edit'
end

post '/contacts/:i/update' do
  i = params[:i].to_i

  updated_contact = { name: params[:name], phone: params[:phone], email: params[:email] }

  contacts = read_contacts
  contacts[i] = updated_contact
  write_contacts( contacts )

  redirect "/contacts/#{i}"
end

get '/contacts/:i/delete' do
  i = params[:i].to_i

  contacts = read_contacts
  contacts.delete_at( i )
  write_contacts( contacts )

  redirect "/contacts"
end

get '/contacts/:i' do
  @i = params[:i].to_i
  contacts = read_contacts
  @contact = contacts[@i]
  erb :'contacts/show'
end