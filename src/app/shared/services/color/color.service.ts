import { Injectable } from '@angular/core';
import { Icolor } from '../../models/interfaces/Icolor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
private colors : Icolor[]

constructor() {
  this.colors=[
    {
      id:0,
      name:"red"
    },
    {
      id:1,
      name:"blue"
    },
    {
      id:2,
      name:"green"
    },

  ]
 }
 public getAll():Icolor[]
 {
  return this.colors
 }

}
