class Pizza
  attr_accessor :name

  BAKING_TIME_IN_MINUTES = 1

  def initialize(name, minutes_in_oven = 0)
    @name = name
    @minutes_in_oven = minutes_in_oven
  end

  def increment_time(minutes = 1)
    @minutes_in_oven += minutes if !is_ready?
  end

  def is_ready?
    @minutes_in_oven == BAKING_TIME_IN_MINUTES
  end
end