import { Component, OnInit,TemplateRef } from '@angular/core';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { FormGroup, FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disease-add',
  templateUrl: './disease-add.component.html',
  styleUrls: ['./disease-add.component.css']
})
export class DiseaseAddComponent implements OnInit {
  disease:Idisease;
  myForm:FormGroup;
  modalRef:BsModalRef;
  constructor(private diseaseServiceService:DiseaseServiceService,private modalService: BsModalService, private Router:Router) { }

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
    this.myForm.reset();
    this.Router.navigate(['disease/component']);

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
