#to: should be replaced with admin email 

class EventMailer < ActionMailer::Base
 
  def new_event_request_email
    @event = params[ :event]
    mail(to: "rupi.jain@gmial.com", subject: "You got a new event request!")

  end

end
