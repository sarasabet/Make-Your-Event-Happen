class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.references :event_type, foreign_key: true
      t.references :event_image, foreign_key: true
      t.index    :start_date
      t.index    :start_time
      t.string   :description
      t.date     :start_date
      t.date     :end_date
      t.time     :start_time
      t.time     :end_time
      t.string   :purpose
      t.boolean  :is_active
      t.timestamps
    end
  end
end
