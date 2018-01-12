class Oven
  attr_accessor :name, :items
  MAX_ITEMS = 3

  def initialize(name)
    @name = name
    @items = []
  end

  def bake(item)
    @items << item if can_bake?
  end

  def can_bake?
    @items.count < MAX_ITEMS == true
  end

  def pop_item(item)
    @items.delete(item)
  end
end