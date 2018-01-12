class Cook
	attr_accessor :name, :secrets
	
	DEFAULT_SECRET = 'If it does not taste well, you did not add enough butter'
	
	def initialize(name, activity = 'on_duty', is_chef = false, secrets = [DEFAULT_SECRET], dishes = [])
	    @name = name
			@secrets = secrets
			@dishes = dishes
			@activity = activity
			@is_chef = is_chef
	end

	def is_chef?
		@is_chef == true
	end

	def day_off
		@activity = 'day_off'
		clear_dishes
	end
	
	def clear_dishes
		@dishes.clear
	end

	def on_duty?
		@activity == 'on_duty'
	end

	def make(dish)
		if (on_duty?)
			if @dishes.count <= 10
				@dishes << dish
				puts "Here you go, a tasty #{dish}."
			else
				puts "Going home, imma drunk."
				day_off
			end
		else
			puts "At home, imma drunk, not working."
		end
	end

	def add_secret(secret)
		@secrets << secret
	end

	def remove_default_secret
		@secrets.delete(DEFAULT_SECRET)
	end

	def print_details
		puts "#{@name}
		These are the secrets: #{@secrets.join(', ')}
		amount of secrets: #{@secrets.count}
		dishes: #{@dishes.join(', ')}"
	end
end