import { Pipe, PipeTransform } from '@angular/core';
import {Idrug} from './../models/interfaces/Idrug';

@Pipe({
  name: 'drug'
})
export class DrugPipe implements PipeTransform {

  transform(drugArray: Idrug[], txtSearch: string): Idrug[]  {
    if(drugArray != null && drugArray.length > 0){
      return drugArray.filter(a=> a.drugName.toLowerCase().indexOf(txtSearch.toLowerCase())>-1);
    }
    return drugArray;
  }

  }
