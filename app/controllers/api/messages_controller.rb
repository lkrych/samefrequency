class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user = current_user
    if @message.save
      render 'api/messages/show'
    else
      render json: ["Unprocessable Entity"], status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :chatroom_id)
  end
end
