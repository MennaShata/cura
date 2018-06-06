import { Injectable } from '@angular/core';
import { Icommunity } from '../models/interfaces/icommunity';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {
  communities: Icommunity[] = [
    {
      id: 1,
      name: 'Cardiology',
      users: ['a', 'b', 'c'],
      icon: '',
      privacy:'public'
    },
    {
      id: 2,
      name: 'abciology',
      users: ['a', 'c'],
      icon: '',
      privacy:'private'
    },
    {
      id: 3,
      name: 'defiology',
      users: ['a', 'b', 'c', 'g'],
      icon: '',
      privacy:'public'
    },
    {
      id: 4,
      name: 'hghiology',
      users: ['a', 'b', 'c', 'g', '', '', '', ''],
      icon: '',
      privacy:'private'
    }
  ]
  constructor() { }
  getAll() {
    return this.communities;
  }
  add(c: Icommunity) {
    this.communities.push(c);
  }
  getById(id: number) {
    for(let i=0;i<this.communities.length;i++){
      if(this.communities[i].id==id){
        return this.communities[i];
      }
    }
  }

  delete(id:number){
    for(let i=0;i<this.communities.length;i++){
      if(this.communities[i].id==id){
        this.communities.splice(id,1);
      }
    }

  }
  update(newCommunity:Icommunity){
    const oldCommunity=this.getById(newCommunity.id);
    oldCommunity.name=newCommunity.name;
    oldCommunity.users=newCommunity.users;
    oldCommunity.privacy=newCommunity.privacy;
  }

}

