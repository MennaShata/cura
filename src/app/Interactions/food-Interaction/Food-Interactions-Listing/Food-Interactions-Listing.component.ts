import { IfoodInteraction } from './../../../shared/models/interfaces/ifoodInteraction';
import { FoodInteractionService } from './../../../shared/services/foodInteraction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Food-Interactions-Listing',
  templateUrl: './Food-Interactions-Listing.component.html',
  styleUrls: ['./Food-Interactions-Listing.component.css']
})
export class FoodInteractionsListingComponent implements OnInit {

  public foodInteractionList: IfoodInteraction[]

  constructor(private FoodInteractionService:FoodInteractionService) { }

  ngOnInit() {
    this.foodInteractionList = this.FoodInteractionService.getFoodInteractionList();
  }

}
