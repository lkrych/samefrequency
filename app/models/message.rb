class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.chatroom) }
  belongs_to :chatroom
  belongs_to :user
end
