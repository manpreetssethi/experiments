# require_relative 'cook.rb'
# require_relative 'restaurant.rb'
require_relative 'oven.rb'
require_relative 'pizza.rb'

# # Our cooks
# foo = Cook.new('Foo')
# bar = Cook.new('Bar')
# baz = Cook.new('Baz', 'on_duty', true)

# # Restaurant
# restaurant = Restaurant.new('Pizza Palace', 4, [foo, bar, baz])
# restaurant.show_cooks
# restaurant.add_cook(Cook.new('Buz'))
# restaurant.show_cooks

# Inspect Pizza
def inspect_items_in_oven(items)
	items.each do |item|
		item
	end
end

# Our Ovens
ovens = [Oven.new('oven 1'), Oven.new('Oven 2')]

# Let's bake our Pizzas!
@pizzas_baked = 0
required_pizzas = 30
while @pizzas_baked < required_pizzas
	ovens.each do |oven|
		@oven = oven
		if @oven.can_bake?
			begin
				# Thread.new do
					pizza = Pizza.new("order # #{@pizzas_baked}")
					puts "Baking #{pizza.name} in #{@oven.name}.."
					@oven.bake(pizza)
					sleep(Pizza::BAKING_TIME_IN_MINUTES)
					@oven.pop_item(pizza)
					@pizzas_baked = @pizzas_baked + 1
					puts "Baked #{pizza.name} in #{@oven.name}.."
				# end
			rescue Exception => e
				puts "EXCEPTION: #{e.inspect}"
				puts "MESSAGE: #{e.message}"
			end
		end
	end
end