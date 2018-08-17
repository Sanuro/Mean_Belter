import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { ReviewRestaurantComponent } from './review-restaurant/review-restaurant.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component: NewRestaurantComponent },
  { path: 'edit/:_id', component:EditRestaurantComponent},
  { path: 'review/:_id', component:ReviewRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
