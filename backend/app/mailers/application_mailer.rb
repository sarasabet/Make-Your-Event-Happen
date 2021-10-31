class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'event_mailer'
end
