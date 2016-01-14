class TwilioController < ApplicationController

  def index
  end

  def send_text_message
  number_to_send_to = "+1XXXXXXXXXX"

  twilio_sid = ENV["TWILIO_SID"]
  twilio_token = ENV["TWILIO_TOKEN"]
  twilio_phone_number = "+18044427346"

  @twilio_client = Twilio::REST::Client.new twilio_sid, twilio_token

  @twilio_client.account.sms.messages.create(
  :from => "+1#{twilio_phone_number}",
  :to => number_to_send_to,
  :body => "Test Message from testing"
  )
 end
 end
