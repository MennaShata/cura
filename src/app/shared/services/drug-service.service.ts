import { Injectable } from '@angular/core';
import {Idrug} from './../models/interfaces/Idrug';
@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {
   arr:Idrug[]=[
   {
     id:0,
     image:'../../../assets/images/panadol1.jpg',
     drugName:'Panadol',
     drugTypeName:'Drink ',
     drugTypeImage:'../../../assets/images/drugBottle.PNG',
     activeIngredient:['Paracetamol','Paracetamol'],
     strength:500,
     strengthUnit:'mg',
     usage:'This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.',
     dosage:'The Usual Dose For Adults Is One Or Two 500MG Tablets Up To 4 Times In 24 Hours.',
     company:'GSK',
     pregnancyWarning:'../../../assets/images/pregnancy-danager.jpg',
     childernWarning:'../../../assets/images/child-danger.jpg',
     warning:'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
     approvalHistory:' 22-2-2012'
   },
   {
     id:1,
    image:'../../../assets/images/panadol1.jpg',
    drugName:'Panadol',
    drugTypeName:'pill ',
    drugTypeImage:'../../../assets/images/drugBottle.PNG',
    activeIngredient:['Paracetamol','Paracetamol2'],
    strength:200,
    strengthUnit:'mg',
    usage:'mosakn',
    dosage:'5mg' ,
    company:'GSK',
    pregnancyWarning:'../../../assets/images/pregnancy-danager.jpg',
    childernWarning:'../../../assets/images/child-danger.jpg',
    warning:'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
    approvalHistory:' 22-2-2012'
   },
   {
     id:2,
    image:'../../../assets/images/aspirin.jpg',
    drugName:'Asprin',
    drugTypeName:'pill ',
    drugTypeImage:'../../../assets/images/drugBottle.PNG',
    activeIngredient:['Paracetamol','Paracetamol2'],
    strength:200,
    strengthUnit:'mg',
    usage:'mosakn',
    dosage:'10mg' ,
    company:'GSK',
    pregnancyWarning:'../../../assets/images/pregnancy-danager.jpg',
    childernWarning:'../../../assets/images/child-danger.jpg',
    warning:'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
    approvalHistory:' 22-2-2012'
   }
  ];

constructor() { }
getAllDrug()
{
  return this.arr;
}
drugSearch(e){
  for(let i=0;i<this.arr.length;i++){
    if(this.arr[i]==e){
      this.arr=[];
      this.arr.push(this.arr[i]);
    }
  }
}
getById(id){
  debugger;
  for(let i=0;i<this.arr.length;i++){
    if(this.arr[i].id==id){
      return this.arr[i];
    }
  }

}

}
