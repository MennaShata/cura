import { Injectable, EventEmitter, Output } from '@angular/core';
import { Idrug } from './../../models/interfaces/Idrug';
import { DrugListingComponent } from './../../../drugs/drug-listing/drug-listing.component';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Subject } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {
  private drugs: Idrug[] = [
    {
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
    {
      id: 1,
      image: '../../../assets/images/panadol1.jpg',
      drugName: 'panadol',
      drugTypeName: 0,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [0, 1],
      strength: 200,
      strengthUnit: 1,
      usage: 'mosakn',
      dosage: '5mg',
      company: 'GSK',
      pregnancyWarning: true,
      childernWarning: false,
      warning: 'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
      approvalHistory: '2010-08-01',
      color: 0,
      shape: 0,
      textOnSide: '23',
      textOnOtherSide: 'panadol',
      pillImage: '../../../assets/images/panadol-pill.jpg',
      disease: [2, 3],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]
    },
    {
      id: 2,
      image: '../../../assets/images/aspirin.jpg',
      drugName: 'asprin',
      drugTypeName: 0,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [1, 2],
      strength: 200,
      strengthUnit: 1,
      usage: 'mosakn',
      dosage: '10mg',
      company: 'GSK',
      pregnancyWarning: false,
      childernWarning: false,
      warning: 'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
      approvalHistory: '2005-12-01',
      color: 3,
      shape: 0,
      textOnSide: '12',
      textOnOtherSide: 'asprin',
      pillImage: '../../../assets/images/panadol-pill.jpg',
      disease: [0, 3],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]
    }
  ];
  constructor() { }
  getAllDrug(): Observable<Idrug[]> {
    return of(this.drugs);
  }
  getById(id) {
    const index = this.drugs.findIndex(a => a.id == id);
    if (index > -1) {
      return this.drugs[index];
    }
  }
  getAllDrugsName() {
    let drugsName: string[] = [];
    for (let i = 0; i < this.drugs.length; i++) {
      drugsName.push(this.drugs[i].drugName);
    }
    return drugsName;
  }

  drugDelete(id) {
    const index = this.drugs.findIndex(a => a.id === id);
    if (index > -1) {
      this.drugs.splice(index, 1);
    }
  }

  add(drug: Idrug) {
    if (drug) {
      debugger;
      drug.id = this.drugs.length;
      this.drugs.push(drug);
    }

  }

  save(drug: Idrug) {
    debugger;
    const oldDrug = this.getById(drug.id);
    oldDrug.image = drug.image;
    oldDrug.drugName = drug.drugName;
    oldDrug.usage = drug.usage;
    oldDrug.dosage = drug.dosage;
    oldDrug.company = drug.company;
    oldDrug.warning = drug.warning;
    oldDrug.pregnancyWarning = drug.pregnancyWarning;
    oldDrug.childernWarning = drug.childernWarning;
    oldDrug.approvalHistory = drug.approvalHistory;
    oldDrug.activeIngredient = drug.activeIngredient;
    oldDrug.drugTypeName = drug.drugTypeName;
    oldDrug.drugTypeImage = drug.drugTypeImage;
    oldDrug.strength = drug.strength;
    oldDrug.strengthUnit = drug.strengthUnit;
    oldDrug.textOnSide = drug.textOnSide;
    oldDrug.textOnOtherSide = drug.textOnOtherSide;
    oldDrug.pillImage = drug.pillImage;
    oldDrug.color = drug.color;
    oldDrug.shape = drug.shape;

  }
  drugSearch(drugName) {
    const index = this.drugs.findIndex(a => a.drugName == drugName);
    if (index > -1) {
      let drug = this.drugs[index];
      this.drugs =[];
      this.drugs.push(drug);
      console.log(this.drugs);
    }
    
      return this.drugs;
  }
}
