import { Component, OnInit , Input} from '@angular/core';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import {DrugServiceService} from './../../shared/services/drug/drug-service.service';
import {DrugTypeService} from './../../shared/services/drug-type/drug-type.service';
import {ActiveIngredientService} from './../../shared/services/active-ingredient/active-ingredient.service';
import {StrengthService} from './../../shared/services/strength/strength.service';

@Component({
  selector: 'app-drug-item-small',
  templateUrl: './drug-item-small.component.html',
  styleUrls: ['./drug-item-small.component.css']
})
export class DrugItemSmallComponent implements OnInit {
 @Input() public drugs:Idrug;
 public drugType:string;
 public activeIngredient:string[]=[];
 public strengthUnit:string;
  constructor(private drugService:DrugServiceService,private drugTypeService:DrugTypeService,private activeIngredientService:ActiveIngredientService,private strengthService:StrengthService) { 
  }

  ngOnInit() {
    this.drugs.usage = this.TrimMaxLength(this.drugs.usage,35);
    this.drugs.dosage = this.TrimMaxLength(this.drugs.dosage,35);
    this.drugType = this.drugTypeService.getName(this.drugs.drugTypeName);
    this.strengthUnit = this.strengthService.getName(this.drugs.strengthUnit);
    for(let i=0;i<this.drugs.activeIngredient.length;i++){
     this.activeIngredient[i] = this.activeIngredientService.getName(this.drugs.activeIngredient[i]);
    }
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
