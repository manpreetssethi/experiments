require_relative 'person.rb'

class Kid < Person
  def rant
    puts "I am #{@name}, I only want to watch The #{@favorite_tv_show}"
  end
end