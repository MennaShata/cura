import { Component, OnInit , Input} from '@angular/core';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import {DrugServiceService} from './../../shared/services/drug/drug-service.service';

@Component({
  selector: 'app-drug-item-small',
  templateUrl: './drug-item-small.component.html',
  styleUrls: ['./drug-item-small.component.css']
})
export class DrugItemSmallComponent implements OnInit {
 @Input() public drugs:Idrug;
  constructor(private drugService:DrugServiceService) { 
  }

  ngOnInit() {
    this.drugs.usage = this.TrimMaxLength(this.drugs.usage,35);
    this.drugs.dosage = this.TrimMaxLength(this.drugs.dosage,35);
  }
  
  public deleteDrug(id){
   this.drugService.drugDelete(id);
  }
  public TrimMaxLength(str, maxLength) {
    var res = str;
    if (str.length > maxLength) {
        res = str.substr(0, maxLength);
        res = res.concat("...");
    }

    return res;
}
}
