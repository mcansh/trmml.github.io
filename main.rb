require 'sinatra'
require 'slim'

get '/' do
	slim :index
end

get '/payment' do
	slim :payment
end

post '/charge' do
  # Amount in cents
  @amount = 1

  customer = Stripe::Customer.create(
    :email => 'customer@example.com',
    :card  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :amount      => @amount,
    :description => 'Sinatra Charge',
    :currency    => 'usd',
    :customer    => customer.id
  )

  erb :charge
end
