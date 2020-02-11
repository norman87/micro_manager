# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create([{name: "Mark", email: "mark@email.com"}, {name: "John", email: "john@email.com"}, {name: "Norman", email: "norman@email.com"}])

# User.create({name: "herda", email: "herda@email.com"})

Campaign.create(
    [{title: "lucky draw campaign", startDate: 20200301, endDate: 20200310, user_id: 3},
    {title: "infosite campaign", startDate: 20200401, endDate: 20200410, user_id: 2},
    {title: "current campaign", startDate: 20200501, endDate: 20200510, user_id: 1},
    {title: "laundry campaign", startDate: 20200601, endDate: 20200610, user_id: 1}]
)
