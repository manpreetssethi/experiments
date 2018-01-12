# Simple loop
# Even numbers
# i = 1
# loop do
# 	if i == 11
# 		break
# 	end
# 	puts i unless i%2 != 0
# 	i = i + 1
# end

# While loop
# Break 6 eggs
# eggs = 0
# while eggs < 6
# 	puts "Broken egg #{eggs+1}"
# 	eggs += 1
# end

# Countdown
# print 'Start number: '
# upper_limit = gets.chomp.to_i
# while upper_limit >= 0
# 	puts upper_limit
# 	upper_limit -= 1;
# end

# For loop (with Range)
# Break 6 eggs
# for counter in 1..6
#     puts "Break egg #{counter}"
# end

# Countdown (with array reverse)
# print 'Start number: '
# upper_limit = gets.to_i
# countdown_numbers = 0..upper_limit
# countdown_numbers = countdown_numbers.reverse
# for counter in countdown_numbers
#     puts counter
# end

# # Countdown (with backwards loop)
# print 'Start number: '
# upper_limit = gets.to_i
# for counter in (1..upper_limit).reverse_each
#     puts counter
# end

# Iterating over fruits
# fruits = ['apples', 'oranges', 'pears', 'apricots']
# fruits.each { |fruit| puts "I love: #{fruit}" }

# Automating counting
# numbers = []
# (1..5).each do |number|
#     numbers.push(number)
#     puts "Adding #{number} to the list."
# end

# numbers.each { |number| puts "Number was: #{number}" }

# numbers.each_with_index { |number, index| puts "index: #{index} number: #{number}" }

# Scope in loops
# puts "All your socks are in place"
# # count = 2
# loop do
# 	count = count || 0
#   puts "you are missing #{count} left socks!"
#   count += 2

#   if count == 8
#     break
#   end
# end
# puts "In total you are missing #{count} left socks."

# Scope in methods
# pepperoni_pizza = 'pepperoni'
# @quattro_formaggio_pizza = 'pizza 2'

# def print_pepperoni_pizza
#     print pepperoni_pizza
# end

# def print_quattro_formaggio_pizza
#     print @quattro_formaggio_pizza
# end

# print_quattro_formaggio_pizza

# Scope and while
# look, we don't set count before the while
# puts "All your socks are in place"
# while true   # this mimics the behavior of a loop - endless looping...
#   count = count || 0 # we set count to zero if it had not been set before.
#   count += 2
#   break if count == 8
#   puts "you are missing #{count} left socks!"
# end
# puts "In total you are missing #{count} left socks."

i = { 'i' => 1 }
if i.has_key?('i') == true
	puts 'yes'
else
	puts 'no'
end