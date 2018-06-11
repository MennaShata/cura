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
      description:'ay kalam pla pla pla'
    },
    {
      image:'./../../../../assets/images/Medical-Wallpapers-4.jpg',
      title:'Check Drug Interacton',
      description:'ay kalam pla pla pla'
    }
  ];

constructor() { }
getAll(){
  return this.sliders;
}

}
