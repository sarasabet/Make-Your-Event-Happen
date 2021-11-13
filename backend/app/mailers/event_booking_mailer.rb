class EventBookingMailer < ApplicationMailer
  def welcome
    # @user = user
    mail(to: rupi.jain@gmail.com, subject: 'Welcome to my App')
  end
end
