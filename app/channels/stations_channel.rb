class StationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "station_#{params[:station_id]}"
  end
end
