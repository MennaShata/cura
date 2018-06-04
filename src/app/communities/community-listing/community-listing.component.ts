import { Component, OnInit } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { CommunityServiceService } from '../../shared/services/community-service.service';

@Component({
  selector: 'app-community-listing',
  templateUrl: './community-listing.component.html',
  styleUrls: ['./community-listing.component.css']
})
export class CommunityListingComponent implements OnInit {
  communities: Icommunity[] ;
  constructor(private CommunityServiceService:CommunityServiceService) { }

  ngOnInit() {
    this.communities=this.CommunityServiceService.getAll();
   
  }

}
