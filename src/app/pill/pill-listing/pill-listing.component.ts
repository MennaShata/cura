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
  constructor(public pillService : PillService) { }

  ngOnInit() {
    this.pillService.onSerch.subscribe(
      () => {this.pills = this.pillService.listOfPills ; console.log(this.pills) }
    )
    
    // this.pillService.getPillsList().subscribe(res => {this.pills = res});
    // console.log("ahahayyyyyyyyyyy");
    // console.log(this.pills);
  }
}
