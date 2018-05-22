import { Injectable } from '@angular/core';
import { Isideeffect } from '../models/interfaces/Isideeffect';

@Injectable({
  providedIn: 'root'
})
export class SideeffectService {
  private sideeffects : Isideeffect[];
 

constructor() { 
  this.sideeffects = [
    {
      name : "soda3",
      description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
      icon:"fa fa-user"

  },
  {
    name : "soda3 nsfi",
    description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
    icon:"fa fa-user"

}
]
}
public getAll():Isideeffect []
{
  return this.sideeffects.slice();
};

}
