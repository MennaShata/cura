import { Injectable } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';
import { Idegree } from '../models/interfaces/Idegree';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {
  diseases: Idisease[] = [
    {
      id:0,
      name: 'cancer',
      descripton: 'bla bla bla',
      bodyParts: ['Eyes', 'Eyes'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '' }],
      treatedDrugs: [{ name: 'paracitamol', type: 'fsfs' , image: ''}]
    },
    {
      id:1,
      name: 'flu',
      descripton: 'bla flu bla',
      bodyParts: ['Eyes', 'Leg'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '' }],
      treatedDrugs: [{ name: 'paracitamol', type: 'gfgfg' , image: ''}]
    },
    {
      id:2,
      name: 'cold',
      descripton: 'bla blaaaaa bla',
      bodyParts: ['Heart', 'Eyes'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '' }],
      treatedDrugs: [{ name: 'paracitamol', type: 'bla bla' , image: ''}]
    },
    {
      id:3,
      name: 'heart attack',
      descripton: 'bla flu bla',
      bodyParts: ['Leg', 'Heart'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '' }],
      treatedDrugs: [{ name: 'paracitamol', type: 'papapa' , image: ''}]
    } 
     
    ];
  constructor() { }
  getDiseases() {
    return this.diseases;
  }
  getDiseaseBodyParts(id: number) {
    return this.diseases[id].bodyParts;
  }
  getForbiddenDrugs(id: number) {
    return this.diseases[id].forbiddenDrugs;
  }
  getTreatedDrugs(id: number) {
    return this.diseases[id].treatedDrugs;
  }
  getById(id: number) {
    for(let i=0;i<this.diseases.length;i++){
      if(this.diseases[i].id==id){
        return this.diseases[i];
      }
    }
  }

  delete(id:number){
    for(let i=0;i<this.diseases.length;i++){
      if(this.diseases[i].id==id){
        this.diseases.splice(id,1);
      }
    }

  }

  add(d:Idisease){
    this.diseases.push(d);
  }
  update(newDisease:Idisease){
    const oldDisease=this.getById(newDisease.id);
    oldDisease.name=newDisease.name;
    oldDisease.bodyParts=newDisease.bodyParts;
    oldDisease.descripton=newDisease.descripton;
    oldDisease.treatedDrugs=newDisease.treatedDrugs;
    oldDisease.forbiddenDrugs=newDisease.forbiddenDrugs;
  }
}
