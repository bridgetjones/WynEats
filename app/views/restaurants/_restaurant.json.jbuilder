json.extract! restaurant, :id, :location_name, :address, :friend_phone, :meetup_time, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
