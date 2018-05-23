import { Injectable } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { fail } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ActiveIngredientService {

  arr:Iactiveingredient[] = 
  [
    {id:1 , name: "para", description:"ay kalam"},
    {id:2 , name: "paracetamol",description:"ay kalam"},
    {id:3 , name: "para3",description:"ay kalam"}
  ];
  activeing:Iactiveingredient;
constructor() { }

  getAll(){
    return this.arr ;
  }

  getById(id){
    for(let i=0 ;i< this.arr.length ; i++){
      if(this.arr[i].id == id){
        this.activeing = this.arr[i];
      }
    }
    return this.activeing ;
  }

}
