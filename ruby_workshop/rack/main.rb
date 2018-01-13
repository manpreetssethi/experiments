require 'rack'
require_relative 'fortune.rb'

app = Proc.new do |env|
    ['200', {'Content-Type' => 'text/html'}, [Fortune::wisdom]]
end
 
Rack::Handler::WEBrick.run app