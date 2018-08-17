import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  newFoodRestaurant = {};
  error = {};
  constructor(private _httpService: HttpService,
  private _router: Router) {}

  ngOnInit() {
  }

  addNewFoodRestaurant() {
    console.log("Clicked on submit button of form", this.newFoodRestaurant)
    let observable = this._httpService.newFoodRestaurant(this.newFoodRestaurant);
    observable.subscribe(data =>{
      if (data['status'] == 200) {
        this._router.navigate(['']);
      }
      else {
        this.error = data['errors'];
      }
    })
  }

}
