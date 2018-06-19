import { Pipe, PipeTransform } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';

@Pipe({
  name: 'disease'
})
export class DiseasePipe implements PipeTransform {
  
  transform(diseaseArray: Idisease[], name: string): Idisease[] {
    
    if(diseaseArray != null && diseaseArray.length > 0){
      diseaseArray =  diseaseArray.filter(f=> f.name.toLowerCase().indexOf(name.toLowerCase())>-1);
    }
    return diseaseArray;
  }

}
