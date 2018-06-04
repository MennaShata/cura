import { Injectable } from '@angular/core';
import { Ipost } from '../models/interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts: Ipost[] =[
    {
      title:'manage your diet',
      body:'disease risk, its often tough to change your eating habits Whether.Once you know which foods to eat more of and which foods to limit', 
      username:'asmaa', 
      comments:['abc','dte']
    },
    {
      title:'manage your diet',
      body:'disease risk, its often tough to change your eating habits Whether.Once you know which foods to eat more of and which foods to limit',
      username:'asmaa',
       comments:['abc','dte']
    },
    {
      title:'manage your diet',
      body:'disease risk, its often tough to change your eating habits Whether.Once you know which foods to eat more of and which foods to limit',
      username:'asmaa',
      comments:['abc','dte']
    }
  ]
constructor() { }
getAll(){
  return this.posts;
}
}
