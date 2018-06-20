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
      name : " nausea",
      description:"Nausea is pronounced stomach discomfort and the sensation of wanting to vomit. Nausea can be a precursor to vomiting the contents of the stomach",
      isDeleted:false

  },
  {
    id:2,
    name : "Vicodin",
    description:"This particular drug is used to treat pain, and is classified as an opioid. There’s a massive opioid epidemic plaguing the U.S. right now",
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
