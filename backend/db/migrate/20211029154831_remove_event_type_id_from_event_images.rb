class RemoveEventTypeIdFromEventImages < ActiveRecord::Migration[6.1]
  def change
    remove_column :event_images, :event_type_id
  end
end
