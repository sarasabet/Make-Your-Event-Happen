class Api::UsersController < ApplicationController

  def new
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    # user = User.find_by_email(params[:email])

    # user[:user_id] = user.id
    # redirect_to '/'
   
  end




end