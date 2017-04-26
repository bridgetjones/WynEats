class CreateUsersearches < ActiveRecord::Migration[5.0]
  def change
    create_table :usersearches do |t|
      t.string :title
      t.timestamps
    end
  end
end
