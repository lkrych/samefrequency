class AddIndexForStationIdToChatrooms < ActiveRecord::Migration[5.0]
  def change
    add_index :chatrooms, :station_id
  end
end
