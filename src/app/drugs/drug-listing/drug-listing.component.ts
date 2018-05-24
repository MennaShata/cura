import { Component, OnInit, OnChanges } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug-service.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
@Component({
  selector: 'app-drug-listing',
  templateUrl: './drug-listing.component.html',
  styleUrls: ['./drug-listing.component.css']
})
export class DrugListingComponent implements OnInit , OnChanges{
  public drugs:Idrug[]=[];
  
  constructor(private c:DrugServiceService) { 
    this.c.getAllDrug().subscribe(
      
      (data)=>{this.drugs=data}
    )
  }

  ngOnInit() {
    this.c.getAllDrug().subscribe(
      
      (data)=>{this.drugs=data}
    )
  }
  ngOnChanges(){
  this.c.getAllDrug().subscribe(
    
    (data)=>{this.drugs=data}
  )
}    // this.c.searchChanged.subscribe(
    //  (value)=>{
    //    debugger;
    //    this.c.drugSearch(value);
    //   }
    // );
  }

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

