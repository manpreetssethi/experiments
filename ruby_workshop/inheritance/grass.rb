require_relative 'plant.rb'

class Grass < Plant
  def initialize
    super('poaceae', moves_in_wind: true)
  end
end