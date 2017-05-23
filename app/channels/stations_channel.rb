class StationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "station_#{params[:station_id]}"
    chatroom = Chatroom.find_by_station_id(params[:station_id])
    unless chatroom
      chatroom = Chatroom.create! station_id: params[:station_id]
    end
  end

  def receive(data)
    chatroom = Chatroom.find_by_station_id(data['chatroom_id'])
    unless chatroom
      chatroom = Chatroom.create! station_id: data['chatroom_id']
    end
    Message.create! content: data['content'],
    chatroom_id: chatroom.id, user_id: data['user_id']
  end

end
