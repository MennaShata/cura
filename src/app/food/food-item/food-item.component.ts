import { Ifood } from './../../shared/models/interfaces/ifood';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() food:Ifood;
  constructor() { }

  ngOnInit() {
  }

}
