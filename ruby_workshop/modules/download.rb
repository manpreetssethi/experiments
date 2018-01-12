require_relative 'printable'

class Download
  include Printable
  
  attr_reader :file_id, :downloaded_at, :downloaded_by

  def initialize(file_id, downloaded_by, downloaded_at = Time.now)
    @file_id = file_id
    @downloaded_at = downloaded_at
    @downloaded_by = downloaded_by
  end
end