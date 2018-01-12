require_relative 'species.rb'

class Plant < Species
  def initialize(
    species_name,
    moves_in_the_wind = false,
    has_flowers = false,
    herbaceous = false,
    woody = false
  )
    super(species_name)
  end
end