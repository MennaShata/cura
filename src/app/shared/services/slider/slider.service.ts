import { Injectable } from '@angular/core';
import { Islider } from '../../models/interfaces/Islider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private sliders:Islider[]=[
    {
      image:'./../../../../assets/images/Medical-Wallpapers-3.jpg',
      title:'Pill Identifier',
      description:'Identify unknown pill'
    },
    {
      image:'./../../../../assets/images/Medical-Wallpapers-4.jpg',
      title:'Drug Interacton',
      description:'Check Interaction'
    }
  ];

constructor() { }
getAll(){
  return this.sliders;
}

}
