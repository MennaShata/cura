import { Injectable } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {
   diseases:Idisease[]=[
     { name : 'cancer' , descripton:'bla bla bla'},
     { name : 'flu' , descripton:'bla flu bla' },
     { name: 'cancer' , descripton:'bla blaaaaa bla' },
     { name: 'flu' , descripton:'bla flu bla' }
    ];
constructor() { }
getDiseases() {
  return this.diseases;
}
}
