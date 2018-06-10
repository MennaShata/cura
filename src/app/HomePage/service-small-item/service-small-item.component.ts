import { Component, OnInit ,Input} from '@angular/core';
import {Iservice} from './../../shared/models/interfaces/Iservice';

@Component({
  selector: 'app-service-small-item',
  templateUrl: './service-small-item.component.html',
  styleUrls: ['./service-small-item.component.css']
})
export class ServiceSmallItemComponent implements OnInit {
@Input() serviceData:Iservice;
  constructor() { }

  ngOnInit() {
  }

}
