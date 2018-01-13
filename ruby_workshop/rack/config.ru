require_relative 'fortune.rb'

run Proc.new { |env| ['200', {'Content-Type' => 'text/html'}, [Fortune.wisdom]] }