class DeleteEventBookinIdFromPayment < ActiveRecord::Migration[6.1]
  def change
    remove_column :payments, :event_booking_id
  end
end
