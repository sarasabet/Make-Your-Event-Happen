class EventBooking < ApplicationRecord
  belongs_to :user
  belongs_to :event
  has_one :payment
end
