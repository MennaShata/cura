import { Component, OnInit } from '@angular/core';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { Idisease } from '../../shared/models/interfaces/idisease';

@Component({
  selector: 'app-disease-add',
  templateUrl: './disease-add.component.html',
  styleUrls: ['./disease-add.component.css']
})
export class DiseaseAddComponent implements OnInit {

  constructor(private diseaseServiceService:DiseaseServiceService) { }

  ngOnInit() {
  }
  addDisease(d:Idisease){
    this.diseaseServiceService.add(d);
  }

}
