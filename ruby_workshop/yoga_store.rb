@shopping_cart = []
@products = {
  1231 => { name: "Super Lite Mat", price: 10 },
  1232 => { name: "Power Mat", price: 20 },
  1233 => { name: "Block", price: 30 },
  1234 => { name: "Meditation cushion", price: 30 },
  1235 => { name: "The best T-shirt", price: 200 },
  1236 => { name: "The cutest yoga pants", price: 300 },
  1237 => { name: "Bring Yoga To Life", price: 30 },
  1238 => { name: "Light On Yoga", price: 10 }
}

puts "Hoi! Welcome to Yoga store, here are the products we offer;"
@products.each { |key, product| puts "Ref: #{key} -  €#{product[:price]} - #{product[:name]}" }

def print_shopping_cart
	if !@shopping_cart.empty?
		puts 'Your shopping cart:'
		@shopping_cart.each do |ref|
			if @products[ref]
				puts "#{@products[ref][:name]}"
			end 
		end
	end
end

def add_to_shopping_cart(ref)
	if @products[ref]
		@shopping_cart << ref
		puts "#{@products[ref][:name]} added to your shopping cart <3"
	else
		puts '!!Invalid product reference number, try again!!'
	end
end

def ask_user_choice
	print "Do you want to add a product to your shopping cart [y/n]: "
	gets.chomp.downcase
end

def ask_product_ref_number
	print "Enter reference number: "
	gets.to_i
end

loop do
		print_shopping_cart
		user_choice = ask_user_choice
		if user_choice == 'n'
			break
		elsif user_choice == 'y'
			add_to_shopping_cart(ask_product_ref_number)
		end
end

print_shopping_cart