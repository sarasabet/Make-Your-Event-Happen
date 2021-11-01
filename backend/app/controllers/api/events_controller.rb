class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render json: @events
  end

  def show
      # event = Event.find params[:id]
 
    puts params
    #event = Event.where("start_date = ?", params[:start_date])
     event = Event.where("is_active = ?", params[:is_active])
    render json: event
  end

  def create
    @events = Event.new(event_params)
    p 'hellooooooooo' 
    
    if @events.save
        render json: {status: "SUCCESS", message: "added a new user!", data: user}, status: :ok
      else
        render json: {status: "ERROR", message: "couldn't add a user", data: user.errors}, status: :unprocessable_entity
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
      :event_type_id,
      :event_image_id, 
      :description,
      :start_date,
      :end_date,
      :start_time,
      :end_time,
      :is_active,
      :purpose,
    )
  end

end

