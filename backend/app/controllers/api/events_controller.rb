class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    @events = @events.where("start_date = ?", params[:start_date]) if params[:start_date] 
    render json: @events
  end

  def show
      event = Event.find params[:id]
     render json: event
  end

  def create
    @events = Event.new(event_params)
    p 'hellooooooooo' 
    
    if @events.save
        render json: {status: "SUCCESS", message: "added a new event!", data: @events}, status: :ok
      else
        render json: {status: "ERROR", message: "couldn't add a event", data: @events.errors}, status: :unprocessable_entity
      end

    #   EventMailer.with(event: @events).new_event_request_email

    #   flash[:success] = "Your order has been successfully booked.Thank you for your business"
    #   redirect_to root_path
    # else
    #   flash.now[:error] = "Your order has been rejected ."
    #   render :new
    # end

  end

  private
  # def event_params
  #   params.require(:event).permit(
  #     :start_date,
  #   )
  # end

  def event_params
    params.require(:event).permit(
     
      :description,
      :event_type_id,
      :start_date,
      :end_date,
      :start_time,
      :end_time,
      :is_active,
      :purpose,
    )
  end

end

