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

}
