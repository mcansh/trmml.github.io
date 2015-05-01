require 'sinatra'
require 'slim'

get '/' do
	slim :index
end

get '/payment' do
	slim :payment
end
