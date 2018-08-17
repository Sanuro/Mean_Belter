import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  foodRestaurants = []
  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    let observable = this._httpservice.getFoodRestaurants()
    observable.subscribe(data => {
      this.foodRestaurants = data['restaurants'];
      console.log(this.foodRestaurants)

    })

  }

}
