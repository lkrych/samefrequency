class StationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "station_#{params[:station_id]}"
  end

  def receive(data)
    Message.create! content: data['content'],
    chatroom_id: data['chatroom_id'], user_id: current_user.id
  end

end
