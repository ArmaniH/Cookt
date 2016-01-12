# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Recipe.destroy_all

recipe_data = get_recipe_data()

recipes.each do |recipe|
    Recipe.create!({
    hits:         info[:name],
    recipe:       info[:photo_url],
    label:        info[:label],
    image:        info[:nationality]
  })
end
