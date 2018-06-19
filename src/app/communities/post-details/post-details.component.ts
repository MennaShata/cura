import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Ipost } from '../../shared/models/interfaces/ipost';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { CommunityServiceService } from '../../shared/services/community-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post:Ipost;
  modalRef: BsModalRef;
  id:number;
  constructor(private CommunityServiceService:CommunityServiceService ,private modalService: BsModalService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    //this.post = this.CommunityServiceService.getById(this.id);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
