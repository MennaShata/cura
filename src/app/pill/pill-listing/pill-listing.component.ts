import { Component, OnInit } from '@angular/core';
import { Ipill } from '../../shared/models/interfaces/ipill';
import { Input } from '@angular/core';
import { PillService } from '../../shared/services/pill/Pill.service';

@Component({
  selector: 'app-pill-listing',
  templateUrl: './pill-listing.component.html',
  styleUrls: ['./pill-listing.component.css']
})
export class PillListingComponent implements OnInit {
  
  pills: Ipill[];
  constructor(public pillservice : PillService) { }
  // public getPills()
  // {
  //   this.pills = this.pillservice.getPillsList();
  // }
  ngOnInit() {
    console.log(this.pillservice.listOfPills);
   this.pills=this.pillservice.listOfPills;
    // this.pills = this.pillservice.getPillsList();
  }
}
