import { Injectable } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {
   diseases:Idisease[]=[
     { name : 'cancer' , descripton:'bla bla bla', bodyParts:['Eyes','Eyes'] , forbiddenDrugs:['panadol','kitofan'], treatedDrugs:['paracitamol']},
     { name : 'flu' , descripton:'bla flu bla' , bodyParts:['Eyes','Leg'], forbiddenDrugs:['panadol','kitofan'], treatedDrugs:['paracitamol']},
     { name: 'cancer' , descripton:'bla blaaaaa bla', bodyParts:['Heart','Eyes'], forbiddenDrugs:['panadol','kitofan'], treatedDrugs:['paracitamol'] },
     { name: 'flu' , descripton:'bla flu bla', bodyParts:['Leg','Heart'] , forbiddenDrugs:['panadol','kitofan'], treatedDrugs:['paracitamol']}
    ];
constructor() { }
getDiseases() {
  return this.diseases;
}
getDiseaseBodyParts(id:number ) {
  return this.diseases[id].bodyParts;
}
getForbiddenDrugs(id:number) {
  return this.diseases[id].forbiddenDrugs;
}
getTreatedDrugs(id:number) {
  return this.diseases[id].treatedDrugs;
}
getById(id:number){
  return this.diseases[id];
}
}
