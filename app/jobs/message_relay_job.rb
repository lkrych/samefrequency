class MessageRelayJob < ApplicationJob
  def perform(message, station_id)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("station_#{station_id}",
                                 messages: JSON.parse(message))
  end
end
