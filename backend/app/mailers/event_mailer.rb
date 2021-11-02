class EventMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.event_mailer.new_event.subject
  #
  # def new_event(event)
    def new_event()
    @greeting = "Hi"
    # @event = 'test'

    mail to: "sara.ilbeigi@gmail.com" , subject: "New Event Request", body:'test'
  end
end
