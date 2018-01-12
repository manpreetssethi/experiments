class Restaurant
  attr_accessor :name, :kitchen_size, :cooks

  def initialize(name, kitchen_size, cooks = [])
    @name = name
    @kitchen_size = kitchen_size
    @cooks = cooks
  end

  def add_cook(cook)
    if @cooks.count < @kitchen_size
      @cooks << cook
    else
      puts 'Kitchen size exceeded, no more cooks allowed!'
    end
  end

  def show_cooks
    @cooks.each do |cook|
      puts "#{cook.name} is our cook" if cook.is_chef? == false
      puts "#{cook.name} is our chef" if cook.is_chef? == true
    end
  end
end