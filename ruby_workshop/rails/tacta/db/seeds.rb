# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Contact.create( { name: "Thomas Jefferson", phone: "+1 206 310 1369" , email: "tjeff@us.gov"       } )
Contact.create( { name: "Charles Darwin"  , phone: "+44 20 7123 4567", email: "darles@evolve.org"  } )
Contact.create( { name: "Nikola Tesla"    , phone: "+385 43 987 3355", email: "nik@inductlabs.com" } )
Contact.create( { name: "Genghis Khan"    , phone: "+976 2 194 2222" , email: "contact@empire.com" } )
Contact.create( { name: "Malcom X"        , phone: "+1 310 155 8822" , email: "x@theroost.org"     } )