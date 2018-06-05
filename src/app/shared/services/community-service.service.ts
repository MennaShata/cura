import { Injectable } from '@angular/core';
import { Icommunity } from '../models/interfaces/icommunity';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {
  communities: Icommunity[] = [
    {
      name:'Cardiology',
      users:['a','b','c'],
      icon:''
    },
    {
      name:'abciology',
      users:['a','c'],
      icon:''

    },
    {
      name:'defiology',
      users:['a','b','c','g'],
      icon:''
    },
    {
      name:'hghiology',
      users:['a','b','c','g','','','',''],
      icon:''
    }
  ]
constructor() { }
getAll(){
  return this.communities;
}

}

