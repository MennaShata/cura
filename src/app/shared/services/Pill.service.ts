import { Injectable } from '@angular/core';
import { Ipill } from '../models/interfaces/Ipill';

@Injectable({
  providedIn: 'root'
})
export class PillService {
  private pills: Ipill[];

  constructor() {
    this.pills = [
      {
        id: 2,
        name: "Tramadol",
        image: "./../../../assets/images/CCA03770.JPG",
        strength: "200",
        strengthUnit: "MG",
        backImprint: "12-N",
        frontImprint: "337",
        color: "Grey",
        shape: "Round"
      },
      {
        id: 1,
        name: "Panadol",
        image: "./../../../assets/images/panadolpill.jpg",
        strength: "500",
        strengthUnit: "MG",
        backImprint: "14-H",
        frontImprint: "Panadol",
        color: "White",
        shape: "Round"

      },
      {
        id: 2,
        name: "Tamol",
        image: "./../../../assets/images/CoDydramol.jpg",
        strength: "100",
        strengthUnit: "MG",
        backImprint: "OO",
        frontImprint: "DYD",
        color: "White",
        shape: "Circle"
      }
     
    ]
  }
  public getPillsList(){
    return this.pills;
  }

}
