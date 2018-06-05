import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
@Component({
  selector: 'app-disease-small-item',
  templateUrl: './disease-small-item.component.html',
  styleUrls: ['./disease-small-item.component.css']
})
export class DiseaseSmallItemComponent implements OnInit {
  @Input() disease:Idisease;
  constructor(private diseaseServiceService:DiseaseServiceService) { }

  ngOnInit() {
  }
  deleteDisease(id:number){
    this.diseaseServiceService.delete(id);
  }
  // editDisease(id:number){
  //   this.diseaseServiceService.update(this.disease);    
  // }

}
