require_relative 'printable.rb'

class Upload
  include Printable
  
  attr_reader :file_id, :uploaded_at

  def initialize(file_id, uploaded_at = Time.now)
    @file_id = file_id
    @uploaded_at = uploaded_at
  end
end