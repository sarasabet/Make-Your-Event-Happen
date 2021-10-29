class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.integer  :event_booking_id
      t.boolean  :status_of_payment
    end
  end
end
