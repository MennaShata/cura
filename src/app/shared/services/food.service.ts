import { Ifood } from './../models/interfaces/ifood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodArray: Ifood[] = [
    { id:1, name: 'potassium', icon: 'fa fa-edit'},
    { id:2, name: 'Calcium', icon: 'fa fa-edit'},
    { id:3, name: 'Vitamen C', icon: 'fa fa-edit'},
    { id:4, name: 'Vitamen Z', icon: 'fa fa-edit'}
]
  public getFoodList(){
    return this.foodArray;
  }
  public deleteFood(id:number){
    const index = this.foodArray.findIndex(a=>a.id === id);
    if(index > -1){
      this.foodArray.splice(index,1)
    }
  }
  public add(food:Ifood){
    this.foodArray.push(food);

  }
constructor() { }

}
