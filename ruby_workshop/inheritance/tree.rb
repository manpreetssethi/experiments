require_relative 'plant.rb'

class Tree < Plant
  alias_method :species_name, :name

  def initialize(name, species_name, has_flowers: false)
    super(
      species_name,
      moves_in_wind: false,
      has_flowers: has_flowers,
      herbaceous: true,
      woody: true
    )
    @my_name = name
  end

  def name
    @my_name
  end
end