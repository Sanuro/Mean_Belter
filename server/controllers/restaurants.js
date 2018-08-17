var mongoose = require('mongoose');
require("../models/restaurant.js");
var Restaurant = mongoose.model('Restaurant');
var Review = mongoose.model("Review");

module.exports = {
    addRestaurant: function(req, res){
        Restaurant.create(req.body, function(err){
            if (err){
                res.json(err)
            } else {
                res.json({status: 200})
            }
        });
    },
    getAll: function(req, res){
        Restaurant.find({}).sort([['avgRating', -1]]).exec(function(err,data){
            if(err){
                res.json(err)
            } else {
                res.json({restaurants: data})
            }
        })
    },
    getOne: function(req,res){
        Restaurant.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },
    updateRestaurant:function(req,res){
        Restaurant.findOneAndUpdate({_id:req.params.id},{$set:req.body},{runValidators: true},function(err,data){
            if(err){
                res.json(err)
            }else{
                res.json({message:"it worked", status:200})
            }
        })
    },
    deleteRestaurant: function(req, res) {
        // must delete test and all reviews with it.
        Restaurant.remove({_id: req.params.id}, function(err) {
            if(err) {
                return res.json(err);
            }
            else {
                return res.json({message:"it worked", status:200})
            }
        })
    },

    newReview: function(req, res) {
        console.log("in newReview");
        Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
            if(err){res.json(err)}
            else{
                let sum = 0;
                console.log(restaurant)
                if (restaurant.review.length>0){ 
                    for(let i of restaurant.review){
                        sum += Number(i.rating);
                        if(i.name==req.body.name){
                            console.log('got here')
                            return res.json({errors: {name: {message: 'This user has already written a review.'}}})
                        }
                    } 
                }
                console.log(sum);
                sum += Number(req.body.rating);
                console.log(sum);
                let avg = sum / (restaurant.review.length + 1); 
                Review.create(req.body, function(err, review){
                    if (err){
                        res.json(err)
                    } else {
                        Restaurant.findOneAndUpdate({_id: req.params.id}, {$push: {review: review}, $set: {avgRating: avg}}, function(err){
                            if(err){
                                console.log("newReview erroring")
                                res.json(err);    
                            }else{
                                res.json({status: 200});
                            }
                        });
                    }
                });
            }
        });
        
    },
}
