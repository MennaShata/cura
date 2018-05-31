import { Component, OnInit } from '@angular/core';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { FormGroup, FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';

@Component({
  selector: 'app-disease-add',
  templateUrl: './disease-add.component.html',
  styleUrls: ['./disease-add.component.css']
})
export class DiseaseAddComponent implements OnInit {
  disease:Idisease;
  myForm:FormGroup;
  constructor(private diseaseServiceService:DiseaseServiceService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      name:new FormControl(),
      descripton:new FormControl(),
      bodyParts:new FormControl(),
      treatedDrugs:new FormControl(),
      forbiddenDrugs:new FormControl()
    });
  }
  public addDisease(){
    this.disease={
      id:6,
      name: this.myForm.get('name').value,
      descripton:this.myForm.get('descripton').value,
      bodyParts:this.myForm.get('bodyParts').value,
      treatedDrugs:this.myForm.get('treatedDrugs').value,
      forbiddenDrugs:this.myForm.get('forbiddenDrugs').value,
    }
    //console.log(this.disease);
    this.diseaseServiceService.add(this.disease);

  }

}
