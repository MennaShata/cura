import { IfoodInteraction } from './../models/interfaces/ifoodInteraction';
import { Injectable } from '@angular/core';
import {degree} from './../enums/degree'

@Injectable({
  providedIn: 'root'
})
export class FoodInteractionService {
  foodInteractionArray: IfoodInteraction[] = [
    { id:1, foodName: 'potassium', degree: degree.minor , description:'tasalo5at w 7agat w7sha kteer', icon: 'icon-featured fa fa-edit  pull-left mr-lg'},
    { id:1, foodName: 'Calcium', degree: degree.major , description:'tasalo5at w 7agat w7sha kteer', icon: 'icon-featured fa fa-edit  pull-left mr-lg'},
    { id:1, foodName: 'Vitamen C', degree: degree.moderate , description:'tasalo5at w 7agat w7sha kteer', icon: 'icon-featured fa fa-edit  pull-left mr-lg'},
   
]
  public getFoodInteractionList(){
    return this.foodInteractionArray;
  }

constructor() { }

}
