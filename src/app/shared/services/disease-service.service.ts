import { Injectable } from '@angular/core';
import { Idisease } from '../models/interfaces/idisease';
import { Idegree } from '../models/interfaces/Idegree';

@Injectable({
  providedIn: 'root'
})
export class DiseaseServiceService {
  private disease:Idisease;
  diseases: Idisease[] = [
    {
      id:0,
      name: 'cancer',
      descripton: 'bla bla bla',
      bodyParts: ['Eyes', 'Arms'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
    },
    {
      id:1,
      name: 'flu',
      descripton: 'bla flu bla',
      bodyParts: ['Eyes', 'Leg'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
    },
    {
      id:2,
      name: 'cold',
      descripton: 'bla blaaaaa bla',
      bodyParts: ['Heart', 'Eyes'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' }],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
     },
    {
      id:3,
      name: 'heart attack',
      descripton: 'bla flu bla',
      bodyParts: ['Leg', 'Heart'],
      forbiddenDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}],
      treatedDrugs: [{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image: '../../../assets/images/ca.jpg' },{ name: 'panadol', type: 'drink', image: '../../../assets/images/p.jpg' },{ name: 'kitofan', type: 'pill', image: '../../../assets/images/ke.gif' },{ name: 'asposide', type: 'drink', image: '../../../assets/images/aspo.jpg' },{ name: 'cataflam', type: 'pill', image:'../../../assets/images/ca.jpg'}]
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
  getById(id) {
    for (let i = 0; i < this.diseases.length; i++) {
      if (this.diseases[i].id == id) {
        this.disease= this.diseases[i];
      }
    }
    return this.disease;
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

  Search(diseaseName) {
  //   const index = this.diseases.findIndex(a => a.name == diseaseName);
  //   if (index > -1) {
  //     let disease = this.diseases[index];
  //     this.diseases =[];
  //     this.diseases.push(disease);
  //     //console.log(this.diseases);
  //   }
    
  //     return this.diseases;
  // }
  if(diseaseName !='' && diseaseName !=null && diseaseName.length > 0){
    let result:Idisease[]=[];
    result = this.diseases.filter(a=> a.name.toLowerCase().indexOf(diseaseName.toLowerCase())>-1);
    return result;
    }
    else{
      return this.diseases;
    }
    
}}
