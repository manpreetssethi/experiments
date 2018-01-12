require_relative 'upload.rb'
require_relative 'download.rb'

# The Upload initializer expects a file_id.
uploads = [ 
  Upload.new(1), 
  Upload.new(2)
]
# The Download initializer expects a file_id, and a string for the username
downloads = [
  Download.new(1, "Arno Fleming"),
  Download.new(1, "Mike Farrell"), 
  Download.new(2, "Arno Fleming")
]

uploads.each{ |upload| puts upload.print_details } 
puts
downloads.each{ |download| puts download.print_details } 