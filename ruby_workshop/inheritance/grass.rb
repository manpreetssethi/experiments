require_relative 'plant.rb'

class Grass < Plant
  def initialize
    super('poaceae', true)
  end
end