import { Component, OnInit, OnChanges } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug/drug-service.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
@Component({
  selector: 'app-drug-listing',
  templateUrl: './drug-listing.component.html',
  styleUrls: ['./drug-listing.component.css']
})
//, OnChanges
export class DrugListingComponent implements OnInit {
  public drugs:Idrug[]=[];
  public txtSearch:string='';
  public allDrugsName:string[];
  
  constructor(private drugService:DrugServiceService) { 
  }

  ngOnInit() {
    this.drugService.getAllDrug().subscribe(
      (data)=>{this.drugs=data}
    );
    this.allDrugsName = this.drugService.getAllDrugsName();
  }
  search(){
    this.drugs = this.drugService.drugSearch(this.txtSearch);

  }
}