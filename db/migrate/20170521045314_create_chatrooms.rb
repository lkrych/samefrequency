class CreateChatrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.integer :station_id
      t.timestamps
    end
  end
end
