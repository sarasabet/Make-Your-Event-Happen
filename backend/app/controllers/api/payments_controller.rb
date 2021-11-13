class Api::PaymentsController < ApplicationController
  def index
    @events = Payment.all
    # @events = @events.where("start_date = ?", params[:start_date]) if params[:start_date] 
    render json: @events
  end

  def show
      event = Payment.find params[:id]
     render json: event
  end

  def create
    @events = Payment.new(event_params)
    
    if @events.save
        render json: {status: "SUCCESS", message: "added a new event!", data: @events}, status: :ok
      else
        render json: {status: "ERROR", message: "couldn't add a event", data: @events.errors}, status: :unprocessable_entity
      end

  end

  private

  def event_params
    params.require(:payment).permit(   
      :event_booking_id,
      :status_of_payment
    )
  end

end
