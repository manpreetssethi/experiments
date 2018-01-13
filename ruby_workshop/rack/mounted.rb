require 'rack'
require 'webrick'
require_relative 'fortune.rb'

server = WEBrick::HTTPServer.new :Port => 9292

server.mount_proc '/fortune' do |req, res|
  res['X-Fortune'] = 'Look at the response my friend'
  res.body = Fortune::wisdom
end

trap("INT") {
    server.shutdown
}

server.start