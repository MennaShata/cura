import { Pipe, PipeTransform } from '@angular/core';
import { Ifood } from '../models/interfaces/ifood';

@Pipe({
  name: 'food'
})
export class FoodPipe implements PipeTransform {

  transform(foodArray: Ifood[], name: string): Ifood[] {
    if(foodArray != null && foodArray.length > 0){
      return foodArray.filter(f=> f.name.toLowerCase().indexOf(name.toLowerCase())>-1);
    }
    return foodArray;
  }

}
