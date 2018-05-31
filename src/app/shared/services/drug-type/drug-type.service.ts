import { IdrugType } from './../../models/interfaces/Idrug-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrugTypeService {

drugTypes: IdrugType[];
public drugType:IdrugType;
constructor() { 
  this.drugTypes = [
  {id:0,name:'Tablets'},
  {id:1,name:'capsules'},
  {id:2,name:'softgels'},
  {id:3,name:'liquids'},
  {id:4,name:'chewables'},
  {id:5,name:'powders'}];
}
public getAll(){
  return this.drugTypes;
}
public getName(id:number):string{
  const index = this.drugTypes.findIndex(a=>a.id ==id);
  if(index >-1){
    return this.drugTypes[index].name;
  }
}
getById(id) {
  for (let i = 0; i < this.drugTypes.length; i++) {
    if (this.drugTypes[i].id == id) {
      this.drugType = this.drugTypes[i];
    }
  }
  return this.drugType;
}
}
