class CreateEventBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :event_bookings do |t|
      t.integer  :user_id
      t.integer  :event_id
      t.boolean  :confirmation
    end
  end
end
