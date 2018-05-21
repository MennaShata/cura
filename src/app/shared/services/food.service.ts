
import { Ifood } from './../models/interfaces/ifood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodArray: Ifood[] = [
    { id:1, name: 'potassium', icon: '<i class="fa fa-edit"></i>'},
    { id:2, name: 'potassium', icon: '<i class="fa fa-edit"></i>'},
    { id:3, name: 'potassium', icon: '<i class="fa fa-edit"></i>'},
    { id:4, name: 'potassium', icon: '<i class="fa fa-edit"></i>'}
]
  public getFoodList(){
    return this.foodArray;
  }
constructor() { }

}
