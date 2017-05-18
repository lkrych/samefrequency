class Api::StationsController < ApplicationController
  def index
    response = HTTParty.get("http://api.shoutcast.com/legacy/Top500?k=#{Figaro.env.SHOUTCAST_KEY}&limit=16")
    render :json => clean_response(response).to_json
  end

  def search
    search_term = URI.encode(params[:searchTerm])
    response = HTTParty.get("http://api.shoutcast.com/legacy/stationsearch?k=#{Figaro.env.SHOUTCAST_KEY}&limit=16&search=#{search_term}")
    render :json => clean_response(response).to_json
  end

  private

  def clean_response(response)
    clean = {}
    necessary_keys = ["name", "id", "genre"]
    station_info = response.parsed_response["stationlist"]["station"]
    station_info.each do |station|
      cleaned = station.select {|key| necessary_keys.include?(key)}
      clean[cleaned["id"].to_i] = cleaned
    end
    return clean
  end

  def stations_params
    params.require(:stations).permit(:searchTerm)
  end
end
