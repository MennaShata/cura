import { Component, OnInit } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug-service.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
@Component({
  selector: 'app-drug-listing',
  templateUrl: './drug-listing.component.html',
  styleUrls: ['./drug-listing.component.css']
})
export class DrugListingComponent implements OnInit {
  public drugs:Idrug[]=[];
  constructor(private c:DrugServiceService) { }

  ngOnInit() {
    this.drugs = this.c.getAllDrug();
  }

}
