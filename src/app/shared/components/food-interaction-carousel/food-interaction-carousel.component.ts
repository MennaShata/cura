import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IfoodInteraction } from 'src/app/shared/models/interfaces/ifoodInteraction';

@Component({
  selector: 'app-food-interaction-carousel',
  templateUrl: './food-interaction-carousel.component.html',
  styleUrls: ['./food-interaction-carousel.component.css']
})
export class FoodInteractionCarouselComponent implements OnInit {
@Input() foodInteraction:IfoodInteraction;
  constructor() { }

  ngOnInit() {
  }

}
