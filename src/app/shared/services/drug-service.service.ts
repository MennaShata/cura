import { Injectable } from '@angular/core';
import {Idrug} from './../models/interfaces/Idrug';
@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {
   arr:Idrug[]=[
   {
     image:'../../../assets/images/panadol1.jpg',
     drugName:'Panadol',
     drugTypeName:'Drink ',
     drugTypeImage:'../../../assets/images/drugBottle.PNG',
     activeIngredient:['Paracetamol','Paracetamol'],
     strength:500,
     strengthUnit:'mg',
     usage:'mosakn',
     dosage:'3mg'
   },
   {
    image:'../../../assets/images/panadol1.jpg',
    drugName:'Panadol',
    drugTypeName:'pill ',
    drugTypeImage:'../../../assets/images/drugBottle.PNG',
    activeIngredient:['Paracetamol','Paracetamol2'],
    strength:200,
    strengthUnit:'mg',
    usage:'mosakn',
    dosage:'5mg' 
   }
  ];

constructor() { }
getAllDrug()
{
  return this.arr;
}

}
