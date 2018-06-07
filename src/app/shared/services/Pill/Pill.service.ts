import { Injectable } from '@angular/core';
import { Ipill } from '../../models/interfaces/Ipill';
import { DrugServiceService } from '../drug/drug-service.service';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private pills: Ipill[];

  constructor(private drugService: DrugServiceService) {
    this.pills = [
      {
        id: 2,
        name: "Tramadol",
        image: "./../../../assets/images/CCA03770.JPG",
        strength: 200,
        strengthUnit: 1,
        backImprint: "12-N",
        frontImprint: "337",
        color: 1,
        shape: 5
      },
      {
        id: 1,
        name: "Panadol",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: 500,
        strengthUnit: 2,
        backImprint: "14-H",
        frontImprint: "Panadol",
        color: 1,
        shape: 4

      },
      {
        id: 3,
        name: "Tamol",
        image: "./../../../assets/images/CoDydramol.jpg",
        strength: 100,
        strengthUnit: 3,
        backImprint: "OO",
        frontImprint: "DYD",
        color: 3,
        shape: 7
      },
      {
        id: 1,
        name: "Panadol",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: 500,
        strengthUnit: 1,
        backImprint: "14-H",
        frontImprint: "Panadol",
        color: 2,
        shape: 5

      },
      {
        id: 1,
        name: "Xanax",
        image: "./../../../assets/images/Xanax.jpg",
        strength: 300,
        strengthUnit: 2,
        backImprint: "",
        frontImprint: "G G 258",
        color: 3,
        shape: 4

      },
      {
        id: 1,
        name: "Alprazolam",
        image: "./../../../assets/images/alprazolam.JPG",
        strength: 300,
        strengthUnit: 3,
        backImprint: "d h d",
        frontImprint: "G 3720",
        color: 2,
        shape: 3

      }


    ]
  }
  public getPillsList() {
    return this.pills;
  }

  public getById(id: number) {
    for (let i = 0; i < this.pills.length; i++) {
      if (this.pills[i].id == id) {
        return this.pills[i];
      }
    }
  }

  Delete(id) {
    let index = this.pills.findIndex(a => a.id === id);
    if (index > -1) {
      this.pills.splice(index, 1);
    }
  }

  Update(newPill: Ipill) {
    const oldPill = this.drugService.getById(newPill.id);
    oldPill.drugName = newPill.name;
    oldPill.textOnSide = newPill.backImprint;
    oldPill.textOnOtherSide = newPill.frontImprint;
    oldPill.strength = newPill.strength;
    oldPill.strengthUnit = newPill.strengthUnit;
    oldPill.color = newPill.color;
    oldPill.shape = newPill.shape;
    oldPill.pillImage = newPill.image;
  }

  Search(searchPill: any) {
    
  }
}
