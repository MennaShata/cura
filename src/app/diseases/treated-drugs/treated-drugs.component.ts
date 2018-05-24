import { Component, OnInit, Input } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';

@Component({
  selector: 'app-treated-drugs',
  templateUrl: './treated-drugs.component.html',
  styleUrls: ['./treated-drugs.component.css']
})
export class TreatedDrugsComponent implements OnInit {
  treatedDrugs:IDrugDisease[];
  constructor(private diseaseServiceService:DiseaseServiceService) { }

  ngOnInit() {
    this.treatedDrugs=this.diseaseServiceService.getTreatedDrugs[1];

  }

}
