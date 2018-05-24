import { Component, OnInit , Input} from '@angular/core';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import {DrugServiceService} from './../../shared/services/drug-service.service';

@Component({
  selector: 'app-drug-item-small',
  templateUrl: './drug-item-small.component.html',
  styleUrls: ['./drug-item-small.component.css']
})
export class DrugItemSmallComponent implements OnInit {
 @Input() public drugs:Idrug;
  constructor(private drugService:DrugServiceService) { }

  ngOnInit() {
  }
  
  public deleteDrug(id){
   this.drugService.drugDelete(id);
  }
}
