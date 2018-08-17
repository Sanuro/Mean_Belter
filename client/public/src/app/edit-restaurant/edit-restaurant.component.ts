import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})

export class EditRestaurantComponent implements OnInit {
  foodRestaurant = {}
  error = {}
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router) { }

    updateFoodRestaurant(_id){
      let observable=this._httpService.updateRestaurant(_id,this.foodRestaurant);
      observable.subscribe(data =>{
        console.log(data)
        if(data["status"] === 200) {
          this._router.navigate(["/"]);
        }
        else {
          this.error = data["errors"];
        }
      })
    }

    deleteOnClick(_id) {
      let observable = this._httpService.deleteRestaurant(_id);
      observable.subscribe(data => {
        if(data["status"] === 200) {
          this._router.navigate(["/"]);
        }
      })
    }

  ngOnInit() {
    
    this._route.params.subscribe( (params: Params) => {
      let observable = this._httpService.getRestaurant( params["_id"]);
      observable.subscribe( data => {
        this.foodRestaurant = data;
        console.log(data)
      }); 
    }); 
  }


}
