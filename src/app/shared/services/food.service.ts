import { Observable, of } from 'rxjs';
import { Ifood } from './../models/interfaces/ifood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodArray: Ifood[] = [
    { id:1, name: 'potassium', icon: 'Po'},
    { id:2, name: 'Calcium', icon: 'Ca'},
    { id:3, name: 'Vitamen C', icon: 'C'},
    { id:4, name: 'Vitamen Z', icon: 'Z'}
]; 
  public getFoodList() : Observable<Ifood[]>{
    return of(this.foodArray);
  }
  public deleteFood(id:number){
    const index = this.foodArray.findIndex(a=>a.id == id);
    if(index > -1){
      this.foodArray.splice(index,1);
    }
    
  }
  public getById(id:number){
    const index = this.foodArray.findIndex(a=>a.id == id);
    if(index >-1){
      return this.foodArray[index];
    }

  }
  public add(food:Ifood){
    this.foodArray.push(food);

  }
  public save(newFood:Ifood){
    const oldFood = this.getById(newFood.id);
    oldFood.icon = newFood.icon;
    oldFood.name = newFood.name
    
  }
constructor() {
 
 }

}
