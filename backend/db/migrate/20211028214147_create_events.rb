class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer  :event_type_id
      t.string   :description
      t.date     :start_date
      t.date     :end_date
      t.time     :start_time
      t.time     :end_time
      t.string   :purpose
      t.integer   :event_image_id
      t.boolean  :is_active
    end
  end
end
