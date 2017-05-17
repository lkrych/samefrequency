class CreateStations < ActiveRecord::Migration[5.0]
  def change
    create_table :stations do |t|
      t.string :name,        null: false
      t.string :provider,    null: false
      t.string :genre,       null: false
      t.string :image_url,   null: false
      t.string :stream_url,  null: false
      t.string :location,    null: false
      t.timestamps
    end

    add_index :stations, :name, unique: true
  end
end
