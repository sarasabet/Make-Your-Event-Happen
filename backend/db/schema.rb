# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_29_155015) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "event_bookings", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.boolean "confirmation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_event_bookings_on_event_id"
    t.index ["user_id"], name: "index_event_bookings_on_user_id"
  end

  create_table "event_images", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "event_type_id"
    t.index ["event_type_id"], name: "index_event_images_on_event_type_id"
  end

  create_table "event_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "events", force: :cascade do |t|
    t.bigint "event_type_id"
    t.bigint "event_image_id"
    t.string "description"
    t.date "start_date"
    t.date "end_date"
    t.time "start_time"
    t.time "end_time"
    t.string "purpose"
    t.boolean "is_active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_image_id"], name: "index_events_on_event_image_id"
    t.index ["event_type_id"], name: "index_events_on_event_type_id"
    t.index ["start_date"], name: "index_events_on_start_date"
    t.index ["start_time"], name: "index_events_on_start_time"
  end

  create_table "payments", force: :cascade do |t|
    t.boolean "status_of_payment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "event_booking_id"
    t.index ["event_booking_id"], name: "index_payments_on_event_booking_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.string "confirm_password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "event_bookings", "events"
  add_foreign_key "event_bookings", "users"
  add_foreign_key "event_images", "event_types"
  add_foreign_key "events", "event_images"
  add_foreign_key "events", "event_types"
  add_foreign_key "payments", "event_bookings"
end
