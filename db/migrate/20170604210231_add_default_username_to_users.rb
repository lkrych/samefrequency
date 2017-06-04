class AddDefaultUsernameToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column_default :users, :username, from: "", to: "Super User!"
  end
end
