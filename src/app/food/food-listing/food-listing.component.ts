
import { Router, ActivatedRoute } from '@angular/router';
import { Ifood } from './../../shared/models/interfaces/ifood';

import { FoodService } from './../../shared/services/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.css']
})
export class FoodListingComponent implements OnInit {
  
  public foodlist: Ifood[];
  name:string = '';
  constructor(private FoodService: FoodService, private router: Router) {
   }

  ngOnInit() {  
      this.foodlist = this.FoodService.getFoodList();
    
  }
  btnClick= function () {
    this.router.navigate(['/addFood']);
};

}
