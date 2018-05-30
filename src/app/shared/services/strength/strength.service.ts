import { Injectable } from '@angular/core';
import { IstrengthUnit } from '../../models/interfaces/Istrength-unit';

@Injectable({
  providedIn: 'root'
})
export class StrengthService {
  private strength:IstrengthUnit[]
constructor() {
  this.strength=[
  {
    id:0,
    name:"mg"
  }
]
 }
 public getAll():IstrengthUnit[]
 {
  return this.strength
 }
}
