class Api::ChatroomsController < ApplicationController
  def show
    chatroom = Chatroom.find_by(station_id: params[:station_id])
    @messages = chatroom.messages.last(10)
    render "api/messages/show_all"
  end
end
