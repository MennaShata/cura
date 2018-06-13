import { Component, OnInit } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { CommunityServiceService } from '../../shared/services/community-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { CommunityAddComponent } from '../community-add/community-add.component';


@Component({
  selector: 'app-community-listing',
  templateUrl: './community-listing.component.html',
  styleUrls: ['./community-listing.component.css']
})
export class CommunityListingComponent implements OnInit {
  communities: Icommunity[] ;
 bsModalRef: BsModalRef;
  
  constructor(private CommunityServiceService:CommunityServiceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.communities=this.CommunityServiceService.getAll();
   
  }
  public openModalWithComponent() {
    this.bsModalRef = this.modalService.show(CommunityAddComponent);
  }

}
