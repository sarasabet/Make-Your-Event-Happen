class Api::EventBookingsController < ApplicationController
  
  def index
    @events = EventBooking.all
    # @events = @events.where("confirmation = ?", params[:confirmation ]) if params[:confirmation ] 
  

    render json: @events
  end

  def show
     event = EventBooking.find params[:id]
    #  EventBookingMailer.with(user: @order).new_order_email.deliver_later
    # EventBookingMailer.welcome.deliver_later
     render json: event
  end

  def create
    @events = EventBooking.new(event_params)
    
    if @events.save
        render json: {status: "SUCCESS", message: "added a new event!", data: @events}, status: :ok
      else
        render json: {status: "ERROR", message: "couldn't add a event", data: @events.errors}, status: :unprocessable_entity
      end

  end
  
  def edit
    
  end

  private

  def event_params
    params.require(:event_booking).permit(   
      :user_id,
      :event_id,
      :confirmation
    )
  end


end
