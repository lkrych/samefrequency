class Api::StationsController < ApplicationController
  def index
    response = HTTParty.get("http://api.shoutcast.com/legacy/Top500?k=#{Figaro.env.SHOUTCAST_KEY}&limit=12")
    render :json => clean_response(response).to_json
  end

  def search
    search_term = URI.encode(params[:searchTerm])
    response = HTTParty.get("http://api.shoutcast.com/legacy/stationsearch?k=#{Figaro.env.SHOUTCAST_KEY}&limit=12&search=#{search_term}")
    render :json => clean_response(response).to_json
  end

  def stream
    response = HTTParty.get("http://yp.shoutcast.com/sbin/tunein-station.pls?id=#{params[:id].to_i}").parsed_response
    uri = URI.extract(response).first
    matched = /^http:\/\/(?<stream>.*)/.match(uri)
    if IPAddress.valid? matched["stream"].split(":").first
      stream_uri = uri + "/;"
    else
      stream_uri = uri
    end
    render :json => stream_uri.to_json
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
