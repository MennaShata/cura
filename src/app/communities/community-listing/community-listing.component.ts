import { Component, OnInit } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';

@Component({
  selector: 'app-community-listing',
  templateUrl: './community-listing.component.html',
  styleUrls: ['./community-listing.component.css']
})
export class CommunityListingComponent implements OnInit {
  communities: Icommunity[] = [
    {
      name:'Cardiology',
      users:['a','b','c'],
      icon:''
    },
    {
      name:'abciology',
      users:['a','c'],
      icon:''

    },
    {
      name:'defiology',
      users:['a','b','c','g'],
      icon:''
    },
    {
      name:'hghiology',
      users:['a','b','c','g','','','',''],
      icon:''
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
