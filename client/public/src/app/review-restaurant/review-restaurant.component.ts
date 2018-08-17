import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-review-restaurant',
  templateUrl: './review-restaurant.component.html',
  styleUrls: ['./review-restaurant.component.css']
})
export class ReviewRestaurantComponent implements OnInit {
  foodRestaurant: any;
  error = {}
  newReview = {rating: 3}
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getRestaurant( params["_id"]);
      observable.subscribe( data => {
        this.foodRestaurant = data;
        console.log(data)
      }); 
    }); 
  }

  createReview(_id){
    let observable = this._httpService.createReview(_id, this.newReview);
    observable.subscribe( data => {
      if (data['status'] == 200) {
        this._router.navigate(['']);
      } else {
        this.error = data['errors'];
      }
      console.log("getting Reviews", data);
    })
    
  }
}
