import { Injectable } from '@angular/core';
import { Ipill } from '../../models/interfaces/Ipill';
import { Idrug } from '../../models/interfaces/Idrug';
import { DrugServiceService } from '../drug/drug-service.service';
import { HelperFunctions } from '../../classes/helper';
import { Subject } from 'rxjs/index';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private oldPill: Ipill;
  private pills: Ipill[];
  onSerch = new Subject<Ipill>();
   listOfPills: Ipill[]=[];

  constructor(private drugService: DrugServiceService) {
    this.pills = [
      {
        id: 5,
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
        id: 3,
        name: "Panadol",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: 500,
        strengthUnit: 2,
        backImprint: "14-H",
        frontImprint: "Panadol",
        color: 1,
        shape: 1

      },
      {
        id: 7,
        name: "Tamol",
        image: "./../../../assets/images/CoDydramol.jpg",
        strength: 100,
        strengthUnit: 2,
        backImprint: "OO",
        frontImprint: "d",
        color: 1,
        shape: 7
      },
      {
        id: 8,
        name: "Gabapentin",
        image: "./../../../assets/images/p4.jpg",
        strength: 300,
        strengthUnit: 2,
        backImprint: "v",
        frontImprint: "36 01",
        color: 3,
        shape: 2

      },
      {
        id: 9,
        name: "Xanax",
        image: "./../../../assets/images/Xanax.jpg",
        strength: 300,
        strengthUnit: 2,
        backImprint: "c",
        frontImprint: "G G 258",
        color: 1,
        shape: 4

      },
      {
        id: 10,
        name: "Alprazolam",
        image: "./../../../assets/images/p2.jpg",
        strength: 300,
        strengthUnit: 2, 
        backImprint: "gg",
        frontImprint: "256",
        color: 1,
        shape: 5

      },
      {
        id: 11,
        name: " Aripiprazole",
        image: "./../../../assets/images/p3.JPG",
        strength: 300,
        strengthUnit: 1,
        backImprint: "5",
        frontImprint: "a",
        color: 11,
        shape: 5

      },
      {
        id: 12,
        name: "GRALISE",
        image: "./../../../assets/images/p5.jpg",
        strength: 200,
        strengthUnit: 3,
        backImprint: "mp",
        frontImprint: "116",
        color: 3,
        shape: 1
      }
    ]
  }

  public getPillsList(){
    return this.listOfPills;
  }

  public getById(id: number) {
    for (let i = 0; i < this.pills.length; i++) {
      if (this.pills[i].id == id) {
        return this.pills[i];
      }
    }
  }

  Delete(id: number) {
    let index = this.listOfPills.findIndex(a => a.id === id);
    debugger;
    console.log("ana gwa al delete service");
    if (index > -1) {
      this.listOfPills.splice(index, 1);
    }
  }

  Update(newPill: Ipill) {
    let index = this.listOfPills.findIndex(a => a.id === newPill.id);
    console.log(this.listOfPills[index]);
    this.listOfPills[index].name = newPill.name;
    this.listOfPills[index].backImprint = newPill.backImprint;
    this.listOfPills[index].frontImprint = newPill.frontImprint;
    this.listOfPills[index].strength = newPill.strength;
    this.listOfPills[index].strengthUnit = newPill.strengthUnit;
    this.listOfPills[index].color = newPill.color;
    this.listOfPills[index].shape = newPill.shape;
    this.listOfPills[index].image = newPill.image;
  }

  Search(frontImprint: any, backImprint: any, shape: any, color: any) {
    this.listOfPills = this.pills;
    // console.log(this.listOfPills);
    if (!HelperFunctions.isNullOrEmpty(frontImprint)) {
      this.listOfPills = this.listOfPills.filter(pill => pill.frontImprint == frontImprint || pill.backImprint == frontImprint);
    }
    if (!HelperFunctions.isNullOrEmpty(backImprint)) {
      this.listOfPills = this.listOfPills.filter(pill => pill.backImprint == backImprint || pill.frontImprint == backImprint);
    }
    if (!HelperFunctions.isNullOrEmpty(color) && color != 0) {
      this.listOfPills = this.listOfPills.filter(pill => pill.color == color);
    }
    if (!HelperFunctions.isNullOrEmpty(shape) && shape != 0) {
      this.listOfPills = this.listOfPills.filter(pill => pill.shape == shape);
    }
    debugger;
    console.log(this.listOfPills);
    // return this.listOfPills;
  }
}
 