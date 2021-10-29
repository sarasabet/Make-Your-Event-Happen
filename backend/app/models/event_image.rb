class EventImage < ApplicationRecord
  belongs_to :event_type
  has_many :event_types 
end
