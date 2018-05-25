import { Injectable ,EventEmitter , Output } from '@angular/core';
import {Idrug} from './../models/interfaces/Idrug';
import { DrugListingComponent } from 'src/app/drugs/drug-listing/drug-listing.component';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {
   private arr:Idrug[]=[
   {
     id:0,
     image:'../../../assets/images/panadol1.jpg',
     drugName:'panadol',
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
    drugName:'panadol',
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
    drugName:'asprin',
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
  private temp:Idrug[];
@Output() searchChanged = new EventEmitter<string>();
constructor() { }
// getAllDrug()
// {
//   debugger;
//   return this.arr;
// }

getAllDrug():Observable<Idrug[]>
{
  return of (this.arr)
}
getById(id){
  for(let i=0;i<this.arr.length;i++){
    if(this.arr[i].id==id){
      return this.arr[i];
    }
  }

}
drugDelete(id){
  for(let i=0;i<this.arr.length;i++){
    if(this.arr[i].id==id){
      this.arr.splice(id,1);
    }
  }
  
  }
// drugSearch(e):Observable<Idrug[]>{
//   debugger;
//   for(let i=0;i<this.arr.length;i++){
//     if(this.arr[i].drugName==e){
//       this.arr=[];
//       this.arr.push(this.arr[i]);
//     }
//   }
//   return Observable.bind(this.arr);
// }
drugSearch(e){
debugger;
  this.arr = this.arr.filter(function(ele){
    return ele.drugName == e;
  })
debugger;
  
  // this.temp=this.arr;
  // for(let i=0;i<this.temp.length;i++){
  //   debugger;
  //   if(this.temp[i].drugName==e){
  //     debugger;
  //     this.arr=[];
  //     //this.arr.push(this.arr[i]);
  //     this.arr.push(this.temp[0]);
  //   }
  // }
  // debugger;
  // this.searchChanged.emit();
}
}
