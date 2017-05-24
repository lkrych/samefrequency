desc "This task is called by the Heroku scheduler add-on"
task :clear_messages => :environment do
  Message.destroy_all
end

task :clear_chatrooms => :environment do
  Chatroom.destroy_all
end
