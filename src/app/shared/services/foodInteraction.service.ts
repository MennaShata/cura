import { IfoodInteraction } from './../models/interfaces/ifoodInteraction';
import { Injectable } from '@angular/core';
import {degree} from './../enums/degree'

@Injectable({
  providedIn: 'root'
})
export class FoodInteractionService {
  foodInteractionArray: IfoodInteraction[] = [
    { id:0, foodName: 'potassium', degree: degree.minor , description:'Potassium is a chemical element with symbol K It was first isolated from potash', icon: 'k'},
    { id:1, foodName: 'Calcium', degree: degree.major , description:' Calcium is a chemical element with symbol Ca a dark oxide-nitride layer calcium is a reactive pale yellow metal that forms', icon: 'Ca'},
    { id:2, foodName: 'Vitamen C', degree: degree.moderate , description:'tasalo5at w 7agat w7sha kteer', icon: 'V'},
   
]
  public getFoodInteractionList(){
    return this.foodInteractionArray;
  }
  
  public getById(id: number){
    return this.foodInteractionArray[id];
  }

constructor() { }

}
