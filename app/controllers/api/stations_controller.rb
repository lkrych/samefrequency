class Api::StationsController < ApplicationController
  def index
    response = HTTParty.get("http://api.shoutcast.com/legacy/Top500?k=#{Figaro.env.SHOUTCAST_KEY}&limit=16")
    return clean_response(response)
  end

  def search
    search_term = URI.encode(params[:searchTerm])
    response = HTTParty.get("http://api.shoutcast.com/legacy/stationsearch?k=#{Figaro.env.SHOUTCAST_KEY}&search=#{search_term}")
    return clean_response(response)
  end

  private

  def clean_response(response)
    clean = []
    necessary_keys = ["name", "id", "genre"]
    station_info = response.parsed_response["stationlist"]["station"]
    station_info.each do |station|
      cleaned = station.select {|key| necessary_keys.include?(key)}
      clean.push(cleaned.to_json)
    end
    return clean
  end

  def stations_params
    params.require(:stations).permit(:searchTerm)
  end
end
