class Api::EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def create
    events = Event.new(event_params)

    # events.save

  end

  private

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

