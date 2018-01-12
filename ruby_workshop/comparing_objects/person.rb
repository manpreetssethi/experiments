class Person
  include Comparable

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    name
  end

  def <=>(other)
    self.alphabet_code <=> other.alphabet_code
  end

  def alphabet_code
    @name.each_byte.first
  end
end

people = [
  Person.new('Sebass'),
  Person.new('Julik'),
  Person.new('Noah')
]

puts people.sort