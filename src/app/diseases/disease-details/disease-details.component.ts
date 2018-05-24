import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';

@Component({
  selector: 'app-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css']
})
export class DiseaseDetailsComponent implements OnInit {

  constructor(private diseaseServiceService:DiseaseServiceService) { }
  @Input() disease:Idisease;
  bodyparts:string[];
  treatedDrugs:string[];
  forbiddenDrugs:string[];
  
  ngOnInit() {
    this.bodyparts=this.diseaseServiceService.getDiseaseBodyParts(1);
    this.disease=this.diseaseServiceService.getById(1);
    this.treatedDrugs=this.diseaseServiceService.getTreatedDrugs(1);
    this.forbiddenDrugs=this.diseaseServiceService.getForbiddenDrugs(1);    
  }
  getBodyParts(id:number){
    return this.bodyparts;
  } 

}
