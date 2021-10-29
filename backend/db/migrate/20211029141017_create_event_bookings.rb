class CreateEventBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :event_bookings do |t|
      t.references :user, index: true, foreign_key: true
      t.references :event,index: true, foreign_key: true
      t.boolean  :confirmation

      t.timestamps
    end
  end
end
