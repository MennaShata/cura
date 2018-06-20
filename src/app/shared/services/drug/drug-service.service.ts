import { Injectable, EventEmitter, Output } from '@angular/core';
import { Idrug } from './../../models/interfaces/Idrug';
import { DrugListingComponent } from './../../../drugs/drug-listing/drug-listing.component';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { Subject } from 'rxjs';

import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {
  private drugs: Idrug[] = [
    {
      id: 1,
      image: '../../../assets/images/panadol1.jpg',
      drugName: 'Minomal R',
      drugTypeName: 0,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [1],
      strength: 175,
      strengthUnit: 1,
      usage: 'It is indicated for the treatment and prophylaxis of bronchospasm associated with asthma, emphysema and chronic bronchitis. Also indicated in adults for the treatment of cardiac asthma and left ventricular or congestive cardiac failure.',
      dosage: 'Chronic bronchospasm:Adult: As hydrate: Initially, 225-450 mg bid, increased if necessary.Child: >3 yr: As modified-release hydrate: 12 mg/kg daily increased to 24 mg/kg daily in 2 divided doses after 1 wk.',
      company: 'Pacific Pharmaceuticals Ltd.',
      pregnancyWarning: false,
      childernWarning: false,
      warning: 'Tablets should be swallowed whole and not chewed because of the structure of the tablet.',
      approvalHistory: 'Wed July 10 2010 02:11:01 GMT-0700 (Pacific Daylight Time) {}',
      color: 1,
      shape: 1,
      textOnSide: 'F1',
      textOnOtherSide: '5',
      pillImage: '../../../assets/images/panadol-pill.jpg',
      disease: [1, 2],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]

    },
    {
      id: 2,
      image: '../../../assets/images/panadol1.jpg',
      drugName: 'Minomal-R SR',
      drugTypeName: 3,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [1],
      strength: 600,
      strengthUnit: 1,
      usage: 'It is indicated for the treatment and prophylaxis of bronchospasm associated with asthma, emphysema and chronic bronchitis. Also indicated in adults for the treatment of cardiac asthma and left ventricular or congestive cardiac failure.',
      dosage: 'Chronic bronchospasm:Adult: As hydrate: Initially, 225-450 mg bid, increased if necessary.Child: >3 yr: As modified-release hydrate: 12 mg/kg daily increased to 24 mg/kg daily in 2 divided doses after 1 wk.',
      company: 'Pacific Pharmaceuticals Ltd.',
      pregnancyWarning: false,
      childernWarning: false,
      warning: 'Aminophylline should not be administered to patients with hypersensitivity to xanthines or ehylenediamine. It should not be administered to patients with active peptic ulcer, since it may increase the volume and acidity of gastric secretions.',
      approvalHistory: 'Wed July 10 2010 02:11:01 GMT-0700 (Pacific Daylight Time) {}',
      disease: [1, 2],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]
    },
    {
      id: 3,
      image: '../../../assets/images/panadol1.jpg',
      drugName: 'panadol',
      drugTypeName: 0,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [0],
      strength: 200,
      strengthUnit: 1,
      usage: 'mosakn',
      dosage: '5mg',
      company: 'GSK',
      pregnancyWarning: true,
      childernWarning: false,
      warning: 'The total maximum dose of paracetamol for an adult is eight 500mg tablets in 24 hours. Wait at least 4 hours between doses.',
      approvalHistory: 'Mon Jun 11 2018 02:11:01 GMT-0700 (Pacific Daylight Time) {}',
      color: 1,
      shape: 1,
      textOnSide: '23',
      textOnOtherSide: 'panadol',
      pillImage: '../../../assets/images/panadol-pill.jpg',
      disease: [2, 3],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]
    },
    {
      id: 4,
      image: '../../../assets/images/aspirin.jpg',
      drugName: 'Pamix-M',
      drugTypeName: 0,
      drugTypeImage: '../../../assets/images/drugBottle.PNG',
      activeIngredient: [0],
      strength: 500,
      strengthUnit: 1,
      usage: 'This is indicated for the treatment of pain and fever in patients with the risk of liver toxicity.',
      dosage: 'Adult dosage: 2 tablets every 4 hours; max. 8 tablets daily.Child Dosage: Not recommended for children under 12 years of age.',
      company: 'Ziska Pharmaceuticals Ltd.',
      pregnancyWarning: true,
      childernWarning: true,
      warning: 'This should be used with caution in alcoholism and decreased kidney function. In cases of overdose, immediate advice should be sought from a physician. Alcohol increases the risk of liver damage that can occur if an overdose of paracetamol is taken. The hazards of paracetamol overdose are greater in persistent heavy drinkers and in people with alcoholic liver disease.',
      approvalHistory: 'Sat May 10 2010 02:11:01 GMT-0700 (Pacific Daylight Time) {}',
      color: 3,
      shape: 1,
      textOnSide: '1F1',
      textOnOtherSide: '5',
      pillImage: '../../../assets/images/panadol-pill.jpg',
      disease: [1, 4],
      sideEffect: [1, 2],
      foodInteraction: [1, 2]
    }
  ];
  url = "http://localhost:53795/api/drug";


  private drugsDisplay:Idrug[]=this.drugs.slice();
  constructor() { }
  getAllDrug(): Observable<Idrug[]> {
    return of(this.drugsDisplay);
    // this.http.get<Idrug[]>(this.url).subscribe(res => { this.drugs = res });
    // return this.http.get<Idrug[]>(this.url);
  }
  getById(id) {
    debugger;
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
      this.drugsDisplay.splice(index,1);
    }

    // const url = `${this.url}/${id}`;
    // this.http.delete(url).subscribe(
    //   (isSuccess)=>
    //   {
    //     if(isSuccess)
    //     { 
    //       debugger
    //       var i =this.drugs.findIndex(a=> a.id === id);
    //       this.drugs.splice(i,1);
    //       this.http.delete(url);
    //     }
    //   },
    //   (error)=> {
    //     alert('you can not delete this drug since it has a relation with other entities');
    //   }
    // );
  }

  add(drug: Idrug) {
    if (drug) {
          drug.id = this.drugs.length+1;
      this.drugs.push(drug);
      this.drugsDisplay = this.drugs;
      // return this.http.post<Istudent>(this.url, student);
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


    // const url = `${this.url}/${drug.id}`;
    // //console.log(url);
    // return this.http.put<Idrug>(url, drug);

  }
  drugSearch(drugName) {
    if(drugName !='' && drugName !=null && drugName.length > 1){
      this.drugsDisplay=[];
      this.drugsDisplay = this.drugs.filter(a=> a.drugName.toLowerCase().indexOf(drugName.toLowerCase())>-1);
      }
      else{
        this.drugsDisplay = this.drugs;
      }
      return this.drugsDisplay;
  }
}
