class MessageRelayJob < ApplicationJob
  def perform(message, station)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("station_#{station.id}",
                                 message: JSON.parse(message))
  end
end
