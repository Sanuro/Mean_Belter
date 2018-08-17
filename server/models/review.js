
const mongoose = require('mongoose')

var ReviewSchema = new mongoose.Schema({
    
name: {type: String, required: [true, "Restaurant name is required"], minlength: [3, "Restaurant name must be 3 characters or longer."]},
rating: {type: Number },
// review: {type: String, required: [true, "Review is required"], minlength: [10, "Review must be 10 characters or longer."]},
},{timestamps:true});



mongoose.model('Review', ReviewSchema);
module.exports = ReviewSchema