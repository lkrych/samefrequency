class Api::ChatroomsController < ApplicationController
  def index
    @chatroom = Chatroom.find_by(station_id: params[:station_id])
    render :json => @chatroom.messages.last(10).to_json
  end
end
