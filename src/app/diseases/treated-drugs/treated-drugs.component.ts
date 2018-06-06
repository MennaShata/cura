import { Component, OnInit, Input } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treated-drugs',
  templateUrl: './treated-drugs.component.html',
  styleUrls: ['./treated-drugs.component.css']
})
export class TreatedDrugsComponent implements OnInit {
  treatedDrugs:IDrugDisease[];
  id:number;
  constructor(private diseaseServiceService:DiseaseServiceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.treatedDrugs=this.diseaseServiceService.getTreatedDrugs(this.id);

  }

}
