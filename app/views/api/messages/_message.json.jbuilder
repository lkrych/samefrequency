json.id message.id
json.content message.content
json.created_at message.created_at
json.updated_at message.updated_at
json.set! :author do
  json.id message.user.id
  json.username message.user.email.split("@").first
end