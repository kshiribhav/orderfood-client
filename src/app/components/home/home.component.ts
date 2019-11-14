import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/app/model/food-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodItems: Observable<FoodItem[]>;

  constructor(private restaurantSvc: RestaurantService) {    
    this.foodItems=this.restaurantSvc.getFoodItems();
   }

  ngOnInit() {
  }

}
