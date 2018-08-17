var ReviewSchema = require('./review.js')
const mongoose = require('mongoose')

var RestaurantSchema = new mongoose.Schema({
    
name: {type: String, required: [true, "Name is required"], minlength: [3, "name must be 3 characters or longer."]},
style: {type: String, required: [true, "Cuisine is required"], minlength: [3, "Cuisine must be 3 characters or longer."]},
// description: {type: String, required: [true, "description is needed"], minlength: [10, "description must be 10 characters or longer."]},
avgRating: {type: Number },
review: [ReviewSchema]


},{timestamps:true});



mongoose.model('Restaurant', RestaurantSchema);