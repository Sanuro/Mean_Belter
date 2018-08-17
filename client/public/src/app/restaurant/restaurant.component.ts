import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {

  @Input() restaurant = {}; 
  
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
      console.log("delete clicked on restaurant in restaurant component")
      let observable = this._httpService.deleteRestaurant(_id);
      observable.subscribe(data => {
        console.log("delete inside subscribe in restaurant component")
        if(data["status"] == 200) {
          console.log("delete inside navigate in restaurant component")
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

