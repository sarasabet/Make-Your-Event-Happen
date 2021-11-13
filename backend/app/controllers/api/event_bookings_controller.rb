class Api::EventBookingsController < ApplicationController

  def index
   
      @events = EventBooking.all
      @events = @events.where("id = ?", params[:id]) if params[:id] 
      @user = @events.user
      # @events = @events.where("id = ?", params[:id]) if params[:id] 

    # if @events.save
      eventMailer.with(user: @user).welcome.deliver_now

    #   flash[:success] = "Thank you for your order! We'll get contact you soon!"
    #   redirect_to root_path
    # else
    #   flash.now[:error] = "Your order form had some errors. Please check the form and resubmit."
    # #   render :new
    # end
  end
end
