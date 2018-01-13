class Fortune
  # A class method that does a system call.
  # Not the safest of things for production
  def self.wisdom
    `fortune`
  end
end