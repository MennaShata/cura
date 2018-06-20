import { Component, OnInit } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { ActivatedRoute } from '@angular/router';
import { Idisease } from '../../shared/models/interfaces/idisease';

@Component({
  selector: 'app-forbidden-drugs',
  templateUrl: './forbidden-drugs.component.html',
  styleUrls: ['./forbidden-drugs.component.css']
})
export class ForbiddenDrugsComponent implements OnInit {
  forbiddenDrugs:IDrugDisease[];
  id:number;
 
  constructor(private diseaseServiceService:DiseaseServiceService, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    // this.forbiddenDrugs=this.diseaseServiceService.getForbiddenDrugs(this.id);
  }

}
