import { Injectable } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';

@Injectable({
  providedIn: 'root'
})
export class ActiveIngredientService {

  arr:Iactiveingredient[] = 
  [
    {name: "para", description:"ay kalam"},
    {name: "paracetamol",description:"ay kalam"},
    {name: "para3",description:"ay kalam"}
  ];
constructor() { }
  getAll(){
    return this.arr ;
  }
}
