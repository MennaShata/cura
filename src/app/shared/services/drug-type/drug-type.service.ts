import { IdrugType } from './../../models/interfaces/Idrug-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrugTypeService {

drugTypes: IdrugType[];
constructor() { 
  this.drugTypes = [
    {
      id: 0,
      name:'pill'
    }
  ]
}
public getAll(){
  this.drugTypes;
}

}
