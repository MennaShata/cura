import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IfoodInteraction } from 'src/app/shared/models/interfaces/ifoodInteraction';
import { FoodInteractionCarouselComponent } from 'src/app/shared/components/food-interaction-carousel/food-interaction-carousel.component';

@Component({
  selector: 'app-food-interaction-carousel-listing',
  templateUrl: './food-interaction-carousel-listing.component.html',
  styleUrls: ['./food-interaction-carousel-listing.component.css']
})
export class FoodInteractionCarouselListingComponent implements OnInit {
@Input() foodinteractions:IfoodInteraction[];
  constructor() { }

  ngOnInit() {
  }

}
