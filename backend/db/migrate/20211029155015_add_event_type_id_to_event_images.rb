class AddEventTypeIdToEventImages < ActiveRecord::Migration[6.1]
  def change
    add_reference :event_images, :event_type, index: true, foreign_key: true
  end
end
