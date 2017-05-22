class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.chatroom.station_id) }
  belongs_to :chatroom
  belongs_to :user
end
