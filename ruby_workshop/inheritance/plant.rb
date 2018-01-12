require_relative 'species.rb'

class Plant < Species
  attr_reader :moves_in_wind, :has_flowers, :herbaceous, :woody

  def initialize(
    species_name,
    moves_in_wind: false,
    has_flowers: false,
    herbaceous: false,
    woody: false
  )
    super(species_name)
  end
end