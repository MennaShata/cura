import { Component, OnInit } from '@angular/core';
import { DiseaseSmallItemComponent } from '../disease-small-item/disease-small-item.component';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { DiseaseAddComponent } from '../disease-add/disease-add.component';

@Component({
  selector: 'app-disease-lising',
  templateUrl: './disease-lising.component.html',
  styleUrls: ['./disease-lising.component.css']
})
export class DiseaseLisingComponent implements OnInit {
 diseases:Idisease[];
 bsModalRef: BsModalRef;
  constructor( private diseaseServiceService:DiseaseServiceService, private modalService: BsModalService) { }
public getDiseases(){
  this.diseases=this.diseaseServiceService.getDiseases();
}
  ngOnInit() {
    this.getDiseases();
  }
  public openModalWithComponent() {
    this.bsModalRef = this.modalService.show(DiseaseAddComponent);
  }
}
