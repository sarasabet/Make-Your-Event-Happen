class Api::UsersController < ApplicationController

  def new
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
    user = User.find params[:id]
   #  EventBookingMailer.with(user: @order).new_order_email.deliver_later
   # EventBookingMailer.welcome.deliver_later
    render json: user
 end
  def create

   
  end




end