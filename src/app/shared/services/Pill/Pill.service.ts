import { Injectable } from '@angular/core';
import { Ipill } from '../../models/interfaces/Ipill';
import { Idrug } from '../../models/interfaces/Idrug';
import { DrugServiceService } from '../drug/drug-service.service';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private oldPill: Ipill;
  private pills: Ipill[];
  private listOfPills: Ipill[];

  constructor(private drugService: DrugServiceService) {
    this.pills = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
        name: "Tamol",
        image: "./../../../assets/images/CoDydramol.jpg",
        strength: 100,
        strengthUnit: 3,
        backImprint: "OO",
        frontImprint: "d",
        color: 3,
        shape: 7
      },
      {
        id: 4,
        name: "Panadol",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: 500,
        strengthUnit: 1,
        backImprint: "14-H",
        frontImprint: "e",
        color: 2,
        shape: 5

      },
      {
        id: 5,
        name: "Xanax",
        image: "./../../../assets/images/Xanax.jpg",
        strength: 300,
        strengthUnit: 2,
        backImprint: "c",
        frontImprint: "G G 258",
        color: 3,
        shape: 4

      },
      {
        id: 6,
        name: "Alprazolam",
        image: "./../../../assets/images/alprazolam.JPG",
        strength: 300,
        strengthUnit: 3,
        backImprint: "a",
        frontImprint: "b",
        color: 1,
        shape: 5

      },
      {
        id: 7,
        name: "DrugSearch",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: 300,
        strengthUnit: 3,
        backImprint: "b",
        frontImprint: "a",
        color: 1,
        shape: 5

      },
      {
        id: 8,
        name: "ha2ool",
        image: "./../../../assets/images/CCA03770.JPG",
        strength: 200,
        strengthUnit: 1,
        backImprint: "b",
        frontImprint: "c",
        color: 3,
        shape: 2
      },


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

  Delete(id: number) {
    let index = this.pills.findIndex(a => a.id === id);
    if (index > -1) {
      this.pills.splice(index, 1);
    }
  }

  Update(newPill: Ipill) {
    debugger;

    console.log(this.drugService.getById(newPill.id));

    this.oldPill = this.getById(newPill.id);
    this.oldPill.name = newPill.name;
    this.oldPill.backImprint = newPill.backImprint;
    this.oldPill.frontImprint = newPill.frontImprint;
    this.oldPill.strength = newPill.strength;
    this.oldPill.strengthUnit = newPill.strengthUnit;
    this.oldPill.color = newPill.color;
    this.oldPill.shape = newPill.shape;
    this.oldPill.image = newPill.image;
  }

  Search(frontImprint: any, backImprint: any, shape: any, color: any) {
    console.log("ana wsalt ll search aly gwa al service");
    this.listOfPills = [];
    debugger;
    //1- full data 
    if ((frontImprint != null && frontImprint != "") && (backImprint != null && backImprint != "") && (color != null && color != 0) && (shape != null && shape != 0)) {
      console.log("gwa step 1 .. full data");
      this.listOfPills = (this.pills).filter(pill => ( (pill.frontImprint == frontImprint && pill.backImprint == backImprint) || (pill.frontImprint == backImprint && pill.backImprint == frontImprint) ) && pill.color == color && pill.shape == shape);
  
      // this.listOfPills = (this.pills).filter(pill => {
      //   if (pill.shape == shape && pill.color == color) {

      //     if (pill.frontImprint == frontImprint && pill.backImprint == backImprint) {
      //       return true;
      //     }
      //     else if (pill.frontImprint == backImprint && pill.backImprint == frontImprint) {
      //       return true;
      //     }

      //   }
      //   return false;
      // });
      console.log("ana kda 3mlt aly 3lya");
    }
    //2- no frontImprint 
    else if ((frontImprint == null || frontImprint == "") && (backImprint != null && backImprint != "") && (color != null && color != 0) && (shape != null && shape != 0)) {
      console.log("gwa step 2  .. no frontImprint");
      this.listOfPills = (this.pills).filter(pill => ( (pill.backImprint == backImprint) || (pill.frontImprint == backImprint) ) && (pill.color == color) && (pill.shape == shape) );
    }
    //3- no backImprint
    else if ((frontImprint != null && frontImprint != "") && (backImprint == null || backImprint == "") && (color != null && color != 0) && (shape != null && shape != 0)) {
      console.log("gwa step 3 .. no backImprint");
      this.listOfPills = (this.pills).filter(pill=> ( (pill.frontImprint == frontImprint) || (pill.backImprint == frontImprint) ) && pill.color == color && pill.shape == shape);
    }
    // //4- no color
    else if ((frontImprint != null && frontImprint != "") && (backImprint != null && backImprint != "") && (color == null || color == 0) && (shape != null && shape != 0))
    {
      console.log("gwa step 4  .. no color");
      this.listOfPills = (this.pills).filter(pill => ( (pill.frontImprint == frontImprint && pill.backImprint == backImprint) || (pill.frontImprint == backImprint && pill.backImprint == frontImprint) )  && (pill.shape == shape) );
    }
    //5- no shape
    else if ((frontImprint != null && frontImprint != "") && (backImprint != null && backImprint != "") && (color != null && color != 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 5 .. no shape");
      this.listOfPills = (this.pills).filter(pill => ( (pill.frontImprint == frontImprint && pill.backImprint == backImprint) || (pill.frontImprint == backImprint && pill.backImprint == frontImprint) ) && (pill.color == color) );
    }
    //6- no color & shape
    else if ((frontImprint != null && frontImprint != "") && (backImprint != null && backImprint != "") && (color == null || color == 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 6 .. no color & shape");
      this.listOfPills = (this.pills).filter(pill => (pill.frontImprint == frontImprint && pill.backImprint == backImprint) || (pill.frontImprint == backImprint && pill.backImprint == frontImprint) );
    }
    //7- no Back & Shape 
    else if ((frontImprint != null && frontImprint != "") && (backImprint == null || backImprint == "") && (color != null && color != 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 7 .. no Back & Shape ");
      this.listOfPills = (this.pills).filter(pill => ( (pill.frontImprint == frontImprint) || (pill.backImprint == frontImprint) ) && (pill.color == color) );
    }
    //8- no Back & Color
    else if ((frontImprint != null && frontImprint != "") && (backImprint == null || backImprint == "") && (color == null || color == 0) && (shape != null && shape != 0))
    {
      console.log("gwa step 8 .. no Back & Color");
      this.listOfPills = (this.pills).filter(pill => ( (pill.frontImprint == frontImprint) || (pill.backImprint == frontImprint) ) && (pill.shape == shape) );
    }
    //9- no Front & Shape 
    else if ((frontImprint == null || frontImprint == "") && (backImprint != null && backImprint != "") && (color != null && color != 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 9 .. no Front & Shape");
      this.listOfPills = (this.pills).filter(pill => ( (pill.backImprint == backImprint) || (pill.frontImprint  == backImprint) ) && (pill.color == color) );
    }
    //10- no Front & Color 
    else if ((frontImprint == null || frontImprint == "") && (backImprint != null && backImprint != "") && (color == null || color == 0) && (shape != null && shape != 0))
    {
      console.log("gwa step 10 .. no Front & Color");
      this.listOfPills = (this.pills).filter(pill => ( (pill.backImprint == backImprint) || (pill.frontImprint  == backImprint) ) && (pill.shape == shape) );
    }
    //11- no Front & Back 
    else if ((frontImprint == null || frontImprint == "") && (backImprint == null || backImprint == "") && (color != null && color != 0) && (shape != null && shape != 0))
    {
      console.log("gwa step 11 .. no Front & Back");
      this.listOfPills = (this.pills).filter(pill => (pill.color == color) && (pill.shape == shape));
    }
    //12- no Back & Color & Shape 
    else if ((frontImprint != null && frontImprint != "") && (backImprint == null || backImprint == "") && (color == null || color == 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 12 .. no Back & Color & Shape");
      this.listOfPills = (this.pills).filter(pill => (pill.frontImprint == frontImprint) || (pill.backImprint == frontImprint));
    }
    //13- no Front & Color & Shape
    else if ((frontImprint == null || frontImprint == "") && (backImprint != null && backImprint != "") && (color == null || color == 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 13 ..  no Front & Color & Shape");
      this.listOfPills = (this.pills).filter(pill => (pill.backImprint == backImprint) || (pill.frontImprint == backImprint) );
    }
    //14- no Front & Back & Shape
    else if ((frontImprint == null || frontImprint == "") && (backImprint == null || backImprint == "") && (color != null && color != 0) && (shape == null || shape == 0))
    {
      console.log("gwa step 14 .. no Front & Back & Shape");
      this.listOfPills = (this.pills).filter(pill =>  pill.color == color);
    }
    //15- no Front & Back & Color
    else if ((frontImprint == null || frontImprint == "") && (backImprint == null || backImprint == "") &&  (color == null || color == 0) && (shape != null && shape != 0))
    {
      console.log("gwa step 15 .. no Front & Back & Color");
      debugger;
      this.listOfPills  = (this.pills).filter(pill =>  pill.shape == shape);
    }
    console.log("ana 3rft al lista bta3t al pill 5las");
    console.log(this.listOfPills);
    return this.listOfPills;

  }


}
