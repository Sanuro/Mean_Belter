import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  newFoodRestaurant(newFoodRestaurant){
    return this._http.post('/restaurants', newFoodRestaurant);
  }

  getFoodRestaurants(){
    return this._http.get('/restaurants');
  }

  getRestaurant(_id){
    return this._http.get(`/restaurant/${_id}`);
  }
  updateRestaurant(_id,updatedRestaurant){
    return this._http.put(`/restaurant/${_id}`,updatedRestaurant)
  }

  deleteRestaurant(_id) {
    return this._http.delete(`/deleteRestaurant/${_id}`);
  }
  
  createReview(_id, newReview){
    return  this._http.post(`/restaurants/${_id}/review`, newReview);
  }


}
