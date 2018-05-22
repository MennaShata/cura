import { Component, OnInit } from '@angular/core';
import { DiseaseSmallItemComponent } from '../disease-small-item/disease-small-item.component';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';

@Component({
  selector: 'app-disease-lising',
  templateUrl: './disease-lising.component.html',
  styleUrls: ['./disease-lising.component.css']
})
export class DiseaseLisingComponent implements OnInit {
 diseases:Idisease[];
  constructor( private diseaseServiceService:DiseaseServiceService) { }
public getDiseases(){
  this.diseases=this.diseaseServiceService.getDiseases();
}
  ngOnInit() {
    this.getDiseases();
  }

}
