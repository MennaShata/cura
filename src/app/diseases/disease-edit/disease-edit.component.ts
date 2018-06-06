import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-disease-edit',
  templateUrl: './disease-edit.component.html',
  styleUrls: ['./disease-edit.component.css']
})
export class DiseaseEditComponent implements OnInit {
  id:number;
  disease:Idisease;
  editForm:FormGroup;
  constructor(private diseaseServiceService:DiseaseServiceService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.disease = this.diseaseServiceService.getById(this.id);

    this.editForm=new FormGroup({
      name:new FormControl(),
      descripton:new FormControl(),
      bodyParts:new FormControl(),
      treatedDrugs:new FormControl(),
      forbiddenDrugs:new FormControl()
    });
  }
  updateDisease(){
    this.disease={
      id:this.id,
      name:this.editForm.get('name').value,
      descripton:this.editForm.get('descripton').value,
      bodyParts:this.editForm.get('bodyParts').value,
      treatedDrugs:this.editForm.get('treatedDrugs').value,
      forbiddenDrugs:this.editForm.get('forbiddenDrugs').value
    }
    this.diseaseServiceService.update(this.disease);
    this.route.navigate(['communityEdit']);
  }

}
