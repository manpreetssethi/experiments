class Person
  attr_reader :name, :favorite_tv_show

  def initialize(name, favorite_tv_show)
    @name = name
    @favorite_tv_show = favorite_tv_show
  end

  def greet
    puts "Hi! I am #{@name}"
  end
end