class EventRequestMailer < ApplicationMailer
 
  def welcome(user)
    @user = params[:user]

    # mail(to: "@user.email", subject: "You got a new order!")
    mail(to: "sara.ilbeigi@gmail.com", subject: "You got a new order!")
  end
end
