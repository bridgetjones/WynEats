class UsersearchController < ApplicationController

  def index
    @usersearches = Usersearch.all
    # render json: @usersearches
  end

  def text



    api_key = 'SKb538df9dc9d34a7ca11fc72904503001'
    api_secret = 'N2lLy6E3m5O3SKAIpOpmYEfiKsMiHng1'
    account_sid = "AC616b3b06e60bda98f9588bf660755433"
    # Your Account SID from www.twilio.com/console
    auth_token = "f7f9ae1222393018e50f40c173ea8a8d"   # Your Auth Token from www.twilio.com/console

    @client = Twilio::REST::Client.new(api_key, api_secret, account_sid)
    message = @client.account.messages.create(:body => "Thank you for using WynEats. Your friend William wants you to meet him at Mary Take Over Pizza!",
    :to => params[:phone],    # Replace with your phone number
    :from => "+13056801539")  # Replace with your Twilio number

    puts message.sid

  end
end
