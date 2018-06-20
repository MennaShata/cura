import { Component, OnInit ,Input} from '@angular/core';
import {Iservice} from './../../shared/models/interfaces/Iservice';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-service-small-item',
  templateUrl: './service-small-item.component.html',
  styleUrls: ['./service-small-item.component.css']
})
export class ServiceSmallItemComponent implements OnInit {
@Input() serviceData:Iservice;
  constructor(private activeRoute :ActivatedRoute,private route:Router) { }

  ngOnInit() {
  }
  funRoute(id)
  {
     if(id==1)
     {
      this.route.navigate(['/pill','page']);
     }
     else if (id == 3) {
      this.route.navigate(['/drug','interaction']);
     } 
  }
}
