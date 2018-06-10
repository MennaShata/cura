import { Injectable } from '@angular/core';
import { Ishape } from '../../models/interfaces/ishape';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  private shapes:Ishape[];
  private shape:Ishape;

constructor() {
  this.shapes=
  [ 
  {id:1,name:'Round'},
  {id:2,name:'Oblong'},
  {id:3,name:'Oval'},
  {id:4,name:'Square'},
  {id:5,name:'Rectangle'},
  {id:6,name:'Diamond'},
  {id:7,name:'Other'}];
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

getById(id) {
  for (let i = 0; i < this.shapes.length; i++) {
    if (this.shapes[i].id == id) {
      this.shape= this.shapes[i];
    }
  }
  return this.shape;
}

}
