module Foo
  def days_from_now
    Time.now + (60*60*24*self)
  end
end

class Numeric
  include Foo
end

puts 2.days_from_now