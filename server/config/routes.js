var Restaurants = require('../controllers/restaurants.js')

module.exports = function(app){
    app.get('/restaurants', Restaurants.getAll)
    app.post('/restaurants', Restaurants.addRestaurant)
    app.get('/restaurant/:id', Restaurants.getOne)
    app.put('/restaurant/:id', Restaurants.updateRestaurant)
    app.delete("/deleteRestaurant/:id", Restaurants.deleteRestaurant);
    app.post("/restaurants/:id/review", Restaurants.newReview);
}