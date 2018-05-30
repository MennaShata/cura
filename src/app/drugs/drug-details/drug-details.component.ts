import { Component, OnInit } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug/drug-service.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  public drug:Idrug;
  public pregnancyWarningSrc:string;
  public childernWarningSrc:string;
  id:number;
  constructor(private drugService:DrugServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.drug = this.drugService.getById(this.id);
    if(this.drug.pregnancyWarning == true){
      this.pregnancyWarningSrc = '../../../assets/images/pregnancy-danager.jpg';
    }
    else{
      this.pregnancyWarningSrc='../../../assets/images/allowPregnancy.png';
    }
    if(this.drug.childernWarning == true){
      this.childernWarningSrc = '../../../assets/images/child-danger.jpg';
    }
    else{
      this.childernWarningSrc = '../../../assets/images/allowChildern.png';
    }
  }

}
