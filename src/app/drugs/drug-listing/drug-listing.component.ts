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
  
  constructor(private drugService:DrugServiceService) { 
    // this.drugService.getAllDrug().subscribe(
      
    //   (data)=>{this.drugs=data}
    // )
  }

  ngOnInit() {
    debugger;
    this.drugService.getAllDrug().subscribe(
      
      (data)=>{this.drugs=data}
    )
  }
}
//   ngOnChanges(){
//   this.drugService.getAllDrug().subscribe(
    
//     (data)=>{this.drugs=data}
//   )
// } }

// this.c.searchChanged.subscribe(
    //  (value)=>{
    //    debugger;
    //    this.c.drugSearch(value);
    //   }
    // );
  

  //  searchListing(){
  //   debugger;
  //    this.c.getAllDrug().subscribe(
  //      (data)=>this.drugs=data
  //    );
  //    debugger;
  //  }  
    

  // drugSearch(e){
  //   debugger;
  //   this.drugs = this.c.drugSearch(e);
  
  // }

