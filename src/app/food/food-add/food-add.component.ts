import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {
  constructor(private FoodService: FoodService) { }
  public food:Ifood;
  form = new FormGroup({
    foodname: new FormControl('', Validators.required),
    foodicon: new FormControl('', Validators.required)
  });
  get foodname(){
    return this.form.get('foodname');
  }
  get foodicon(){
    return this.form.get('foodicon');
  }


  ngOnInit() {
  }
  addFood(){
    this.food = {
      name: this.foodname.value,
      icon: this.foodicon.value

    }
    console.log(this.food)
    this.FoodService.add(this.food);
    console.log(this.FoodService.foodArray)
  }

}
