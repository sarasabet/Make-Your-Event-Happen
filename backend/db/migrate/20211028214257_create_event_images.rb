class CreateEventImages < ActiveRecord::Migration[6.1]
  def change
    create_table :event_images do |t|
      t.integer   :event_type_id
      t.string    :url
    end
  end
end
