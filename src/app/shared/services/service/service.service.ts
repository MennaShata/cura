import { Injectable } from '@angular/core';
import { Iservice } from '../../models/interfaces/Iservice';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private serviceArray:Iservice[]=[
    {
      title:'Pill Identifier',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.'
   },
   {
     title:'Symptom Checker',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.'
   },
   {
     title:'Interaction Checker',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     title:'Ask a question!',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     title:'Meet health Professionals',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   },
   {
     title:'Add Your Medicine List',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet.',
   }

  ];

constructor() { }
getAllService(){
  return this.serviceArray;
}

}
