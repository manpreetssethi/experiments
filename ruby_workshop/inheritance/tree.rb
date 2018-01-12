require_relative 'plant.rb'

class Tree < Plant
  attr_accessor :name

  def initialize(name, species_name, has_flowers)
    super(species_name, false, has_flowers, true, true)
    @name = name
  end
end