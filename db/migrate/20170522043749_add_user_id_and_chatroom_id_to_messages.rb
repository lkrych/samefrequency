class AddUserIdAndChatroomIdToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :user_id, :integer
    add_index :messages, :user_id
    add_column :messages, :chatroom_id, :integer
    add_index :messages, :chatroom_id
  end
end
