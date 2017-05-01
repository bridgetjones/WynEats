class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :location_name
      t.string :address
      t.string :friend_phone
      t.string :meetup_time

      t.timestamps
    end
  end
end
