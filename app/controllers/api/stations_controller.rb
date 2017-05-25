class Api::StationsController < ApplicationController
  def index
    response = HTTParty.get("http://api.shoutcast.com/legacy/Top500?k=#{Figaro.env.SHOUTCAST_KEY}&limit=12")
    render :json => clean_response(response).to_json
  end

  def search
    search_term = URI.encode(params[:searchTerm])
    response = HTTParty.get("http://api.shoutcast.com/legacy/stationsearch?k=#{Figaro.env.SHOUTCAST_KEY}&limit=12&search=#{search_term}")
    clean = clean_response(response)
    if clean.nil?
      render :json => ["Sorry! We couldn't any stations that matched #{params[:searchTerm]}."], status: 404
    else
      render :json => clean.to_json
    end
  end

  def stream
    response = HTTParty.get("http://yp.shoutcast.com/sbin/tunein-station.pls?id=#{params[:id].to_i}").parsed_response
    uri = URI.extract(response).first
    matched = /^http:\/\/(?<stream>.*)/.match(uri)
    begin
      if IPAddress.valid? matched["stream"].split(":").first
        stream_uri = uri + "/;"
      elsif uri.include? "mp3"
        stream_uri = uri
      elsif matched["stream"].split(":").length > 1
        stream_uri = uri + "/;"
      else
        stream_uri = uri
      end

      render :json => stream_uri.to_json

    rescue
      render :json => ["Sorry! We couldn't find that stream."], status: 404
    end
  end

  private

  def clean_response(response)
    clean = {}
    necessary_keys = ["name", "id", "genre"]
    station_info = response.parsed_response["stationlist"]["station"]
    begin
      station_info.each do |station|
        cleaned = station.select {|key| necessary_keys.include?(key)}
        clean[cleaned["id"].to_i] = cleaned
      end
      return clean
    rescue
      return nil
    end
  end

  def stations_params
    params.require(:stations).permit(:searchTerm)
  end

end
