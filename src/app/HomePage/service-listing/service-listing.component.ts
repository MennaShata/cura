import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../shared/models/interfaces/Iservice';
import {ServiceService} from '../../shared/services/service/service.service';
@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.css']
})
export class ServiceListingComponent implements OnInit {
public serviceArray:Iservice[]=[];
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.serviceArray = this.service.getAllService();
  }

}
