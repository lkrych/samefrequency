class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_url, :string, default: "https://res.cloudinary.com/heab4q3lg/image/upload/h_128/v1495662591/radio.png"
    add_column :users, :username, :string
  end
end
