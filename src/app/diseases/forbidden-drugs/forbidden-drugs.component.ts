import { Component, OnInit } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';

@Component({
  selector: 'app-forbidden-drugs',
  templateUrl: './forbidden-drugs.component.html',
  styleUrls: ['./forbidden-drugs.component.css']
})
export class ForbiddenDrugsComponent implements OnInit {
  forbiddenDrugs:IDrugDisease[];
  constructor(private diseaseServiceService:DiseaseServiceService) { }
  
  ngOnInit() {
    this.forbiddenDrugs=this.diseaseServiceService.getForbiddenDrugs(1);
  }

}
