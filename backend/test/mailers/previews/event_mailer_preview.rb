# Preview all emails at http://localhost:3001/rails/mailers/event_mailer
class EventMailerPreview < ActionMailer::Preview
  def new_event_request_email
    # Set up a temporary order for the preview
    event = Event.new(    
    id: 16,
    event_type_id: 1,
    event_image_id: 2,  
    description: 'this is a new event',
    start_date: '2021-11-29',
    end_date:   '2021-11-29',
    start_time: '04:00:00',
    end_time:   '07:00:00',
    is_active:   'true',
    purpose:    'Personal'
    )
    EventMailer.with(event: event).new_event_request_email
 
  end
end