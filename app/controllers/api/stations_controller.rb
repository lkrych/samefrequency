require 'uri'
class Api::StationsController < ApplicationController
  def index
    response = HTTParty.get("http://api.shoutcast.com/legacy/Top500?k=#{SHOUTCAST_KEY}&limit=16")
    @clean = clean_response(response)
  end

  def search(search_term)
    response = HTTParty.get("http://api.shoutcast.com/legacy/stationsearch?k=
    #{SHOUTCAST_KEY}&search=#{URI.encode(search_term)}")
    @clean = clean_response(response)
  end

  private

  def clean_response(response)
    clean = []
    necessary_keys = ["name", "id", "genre"]
    station_info = response.parsed_response["stationlist"]["station"]
    station_info.each do |station|
      clean.push(station.select {|key| necessary_keys.include?(key)})
    end
    return clean
  end
end
