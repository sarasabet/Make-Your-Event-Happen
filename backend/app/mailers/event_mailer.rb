#to: should be replaced with admin email 

class EventMailer < ActionMailer::Base
 
  def new_event_request_email
    @event = params[ :event]
<<<<<<< HEAD
    # to should be replace with @event.user.email
    mail(to: "makeyoureventhappen123@gmail.com", subject: "You got a new event request!")
=======
    mail(to: "rupi.jain@gmial.com", subject: "You got a new event request!")
>>>>>>> 80a77f4599d9977e0c272f1b8cef2d3f3971afd0

  end

end
