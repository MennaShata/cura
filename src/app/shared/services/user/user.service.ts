import { Injectable } from '@angular/core';
import { Iuser } from '../../models/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Iuser[]

constructor() { 
this.users= [{
    username:"hamda",
    email:"menna@g.com",
    password:"ai klam",
    druglist:[{
      drug:{
        id: 0,
        image: '../../../assets/images/panadol1.jpg',
        drugName: 'panadol',
        drugTypeName: 3,
        drugTypeImage: '../../../assets/images/drugBottle.PNG',
        activeIngredient: [3, 4],
        strength: 500,
        strengthUnit: 1,
        usage: 'This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.',
        dosage: 'The Usual Dose For Adults Is One Or Two 500MG Tablets Up To 4 Times In 24 Hours.',
        company: 'GSK',
        pregnancyWarning: true,
        childernWarning: true,
        warning: 'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
        approvalHistory: '2017-12-01',
        disease: [0, 1],
        sideEffect: [1, 2],
        foodInteraction: [1, 2]
      },
      dose:12,
      startDate:11-10-1994,
      pillsPerDay:7   
    }]
    
  }
,{ username:"hamda",
email:"menna@g.com",
password:"ai klam",
druglist:[{
  drug:{
    id: 0,
    image: '../../../assets/images/panadol1.jpg',
    drugName: 'panadol',
    drugTypeName: 3,
    drugTypeImage: '../../../assets/images/drugBottle.PNG',
    activeIngredient: [3, 4],
    strength: 500,
    strengthUnit: 1,
    usage: 'This drug is used to treat mild to moderate pain (from headaches, menstrual periods, toothaches, backaches, osteoarthritis, or cold/flu aches and pains) and to reduce fever.',
    dosage: 'The Usual Dose For Adults Is One Or Two 500MG Tablets Up To 4 Times In 24 Hours.',
    company: 'GSK',
    pregnancyWarning: true,
    childernWarning: true,
    warning: 'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
    approvalHistory: '2017-12-01',
    disease: [0, 1],
    sideEffect: [1, 2],
    foodInteraction: [1, 2]
  },
  dose:12,
  startDate:11-10-1994,
  pillsPerDay:7   
}]
}]
}

}
