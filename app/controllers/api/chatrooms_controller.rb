class Api::ChatroomsController < ApplicationController
  def show
    @chatroom = Chatroom.find_by(station_id: params[:station_id])
    @message = Message.new
  end
end
