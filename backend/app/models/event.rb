class Event < ApplicationRecord
  belongs_to :event_type
  belongs_to :event_image
  has_many :event_bookings
  has_many :event_images
end
