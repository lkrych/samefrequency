desc "This task is called by the Heroku scheduler add-on"
task :clear_messages_and_chatrooms => :environment do
  Message.destroy_all
  Chatroom.destroy_all
end
