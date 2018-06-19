import { Injectable } from '@angular/core';
import { Iservice } from '../../models/interfaces/Iservice';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private serviceArray:Iservice[]=[
    {
      id:1,
      title:'Pill Identifier',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.'
   },
   {
     id:2,
     title:'Symptom Checker',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.'
   },
   {
     id:3,
     title:'Interaction Checker',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     id:4,
     title:'Ask a question!',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     id:5,
     title:'Meet health Professionals',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     id:6,
     title:'Add Your Medicine List',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   }

  ];

constructor() { }
getAllService(){
  return this.serviceArray;
}

}
