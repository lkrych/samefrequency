class Api::MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    message.user = current_user
    if message.save
      ActionCable.server.broadcast 'messages',
        message: message.content,
        user: message.user.email.split("@").first
      head :ok
    else
      redirect_to chatrooms_path
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :chatroom_id)
  end
end
