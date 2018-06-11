import { Injectable } from '@angular/core';
import { Idoctor } from '../../models/interfaces/Idoctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private doctors:Idoctor[]=[
  {
    image:'./../../../../assets/images/doc1.jpg',
    speaclist:'Cardiology',
    name:'John Doe'
  },
  {
    image:'./../../../../assets/images/doc2.jpg',
    speaclist:'Gastroenterology',
    name:'Robin Doe'
  },
  {
    image:'./../../../../assets/images/doc1.jpg',
    speaclist:'Pulmonology<',
    name:'Jessica Doe'
  },
  {
    image:'./../../../../assets/images/doc2.jpg',
    speaclist:'Dental',
    name:'Rose Doe'
  },
  {
    image:'./../../../../assets/images/doc1.jpg',
    speaclist:'Gynecology',
    name:'Mary Ann Doe'
  },
  {
    image:'./../../../../assets/images/doc2.jpg',
    speaclist:'',
    name:''
  }
];
constructor() { }
getAllDoctors(){
  return this.doctors;
}

}
