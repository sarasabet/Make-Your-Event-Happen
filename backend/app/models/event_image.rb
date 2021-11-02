class EventImage < ApplicationRecord
  belongs_to :event_type, dependent: :destroy 
end
