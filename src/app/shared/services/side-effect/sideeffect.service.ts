import { Injectable } from '@angular/core';
import { Isideeffect } from '../../models/interfaces/Isideeffect';

@Injectable({
  providedIn: 'root'
})
export class SideeffectService {
  private sideeffects : Isideeffect[];
 

constructor() { 
  this.sideeffects = [
    {
      id:1,
      name : "soda3",
      description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
      icon:"fa fa-user",
      isDeleted:false

  },
  {
    id:2,
    name : "soda3 nsfi",
    description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
    icon:"fa fa-user",
    isDeleted:false


}
]
}
public getAll():Isideeffect []
{
  return this.sideeffects
};

public Delete(id:number)
{
 
    for(let i=0;i<this.sideeffects.length;i++)
    {
      if(this.sideeffects[i].id==id)
      {
        this.sideeffects.splice(i,1);
      }
    }


}
add(s:Isideeffect){
  this.sideeffects.push(s);
}

getById(id){
  const index = this.sideeffects.findIndex(a=>a.id ==id);
  if(index >-1){
    return this.sideeffects[index];
  }
  
}
save(sideeffect:Isideeffect){
  const old= this.getById(sideeffect.id);
  old.name = sideeffect.name;
  old.description=sideeffect.description;
}
}
