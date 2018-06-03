import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drug'
})
export class DrugPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
