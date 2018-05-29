import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {
  food:Ifood;

  constructor(private FoodService: FoodService) { }

  ngOnInit() {
  }
  addFood(form){
    this.food = form.value;
    this.FoodService.add(this.food);
  }

}
