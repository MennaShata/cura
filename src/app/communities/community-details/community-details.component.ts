import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { ActivatedRoute } from '@angular/router';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { CommunityServiceService } from '../../shared/services/community-service.service';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css']
})
export class CommunityDetailsComponent implements OnInit {
  id:number;
  community:Icommunity;
  bsModalRef: BsModalRef;
  constructor(private CommunityServiceService:CommunityServiceService ,private modalService: BsModalService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.community = this.CommunityServiceService.getById(this.id);
    
  }
  public openModalWithComponent() {
    //debugger
    this.bsModalRef = this.modalService.show(PostDetailsComponent);
  }

}
