require 'json'

def read_contacts
   json = File.read( 'contacts.json' )
   array = JSON.parse( json, { :symbolize_names => true } )
end

def write_contacts( contacts )
   File.open( "contacts.json", "w" ) do |f|
      json = JSON.pretty_generate( contacts )
      f.write( json  )
   end
end