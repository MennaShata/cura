import { Injectable } from '@angular/core';
import { IstrengthUnit } from '../../models/interfaces/Istrength-unit';

@Injectable({
  providedIn: 'root'
})
export class StrengthService {
  private strength:IstrengthUnit[]
constructor() {
  this.strength=[
  {id:0,name:'gram'},
  {id:1,name:'mg'},
  {id:2,name:'ml'}]};

public strengthUnit:IstrengthUnit;
 public getAll():IstrengthUnit[]
 {
  return this.strength;
 }
 public getName(id:number):string{
  const index = this.strength.findIndex(a=>a.id ==id);
  if(index >-1){
    return this.strength[index].name;
  }
}
getById(id) {
  for (let i = 0; i < this.strength.length; i++) {
    if (this.strength[i].id == id) {
      this.strengthUnit = this.strength[i];
    }
  }
  return this.strengthUnit;
}
}
