class Api::UsersController < ApplicationController

  def new
  end

  def index
    @users = User.all
    render json: @users
  end

  def create

   
  end




end