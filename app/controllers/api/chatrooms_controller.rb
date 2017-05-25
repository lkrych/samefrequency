class Api::ChatroomsController < ApplicationController
  def show
    chatroom = Chatroom.find_by(station_id: params[:station_id])
    if chatroom
      @messages = chatroom.messages.includes(:user).last(params[:chatLength])
    else
      @messages = []
    end
    render "api/messages/show_all"
  end
end
