import { Injectable } from '@angular/core';
import { Ishape } from '../../models/interfaces/ishape';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  private shapes:Ishape[]

constructor() {
  this.shapes=[
    {
      id:0,
      name:"circle"
    },
    {
      id:1,
      name:"circle"
    },
   
]
 }
 public getAll():Ishape[]
 {
  return this.shapes
 }
 public getName(id:number):string{
  const index = this.shapes.findIndex(a=>a.id ==id);
  if(index >-1){
    return this.shapes[index].name;
  }
}
}
