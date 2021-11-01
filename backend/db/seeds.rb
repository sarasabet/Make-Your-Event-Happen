# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...

## Event Types

EventType.destroy_all
puts "Finding or Creating Event Types ..."

type1 = EventType.find_or_create_by! id: 1, name: 'Dance'
type2 = EventType.find_or_create_by! id: 2,name: 'Cooking'
type3 = EventType.find_or_create_by! id: 3,name: 'Painting'
type4 = EventType.find_or_create_by! id: 4,name: 'Music'

## Event Images
EventImage.destroy_all
puts "Finding or Creating Event Images ..."

img1 =  EventImage.create!({
  id: 1,
  event_type_id: type1.id,
  url: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'
})
img2 = EventImage.create!({
  id: 2,
  event_type_id: type1.id,
  url:'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
})
img3 = EventImage.create!({
  id: 3,
  event_type_id: type2.id,
  url: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
})
img4 = EventImage.create!({
  id: 4,
  event_type_id: type3.id,
  url: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
})
img5 = EventImage.create!({
  id: 5,
  event_type_id: type4.id,
  url: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
})

## Events


puts "Re-creating Events ..."

Event.destroy_all

Event.create!({
    id: 1,
  event_type_id: type1.id,
  event_image_id: img1.id,  
  description: 'this is good event',
  start_date: '2021-11-01',
  end_date:   '2021-11-01',
  start_time: '09:00:00',
  end_time:   '11:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'
})

Event.create!({
    id: 2,
  event_type_id: type1.id,
  event_image_id: img2.id,  
  description: 'this is good event',
  start_date: '2021-11-01',
  end_date:   '2021-11-01',
  start_time: '16:00:00',
  end_time:   '19:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
})

Event.create!({
    id: 3,
  event_type_id: type2.id,
  event_image_id: img3.id,  
  description: 'this is good event',
  start_date: '2021-11-03',
  end_date:   '2021-11-03',
  start_time: '09:00:00',
  end_time:   '24:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
})

Event.create!({
    id: 4,
  event_type_id: type3.id,
  event_image_id: img4.id,  
  description: 'this is good event',
  start_date: '2021-11-09',
  end_date:   '2021-11-11',
  start_time: '09:00:00',
  end_time:   '24:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
})

Event.create!({
    id: 5,
  event_type_id: type4.id,
  event_image_id: img5.id,  
  description: 'this is good event',
  start_date: '2021-11-06',
  end_date:   '2021-11-06',
  start_time: '13:00:00',
  end_time:   '17:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
})

Event.create!({
    id: 6,
  event_type_id: type4.id,
  event_image_id: img5.id,  
  description: 'this is good event',
  start_date: '2021-11-06',
  end_date:   '2021-11-06',
  start_time: '19:00:00',
  end_time:   '22:00:00',
  is_active:   'true',
  purpose:    'Personal',
  image: 'https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?s=612x612'
})

User.create!({
  id:1,
  name:'user1',
  email:'user@test.com',
  password:'0000',
  confirm_password:'0000',
})

User.create!({
  id:2,
  name:'user2',
  email:'user2@test.com',
  password:'0000',
  confirm_password:'0000',
})

User.create!({
  id:3,
  name:'user3',
  email:'user3@test.com',
  password:'0000',
  confirm_password:'0000',
})



puts "DONE!"

