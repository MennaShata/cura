import { Component, OnInit, TemplateRef } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunityServiceService } from '../../shared/services/community-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-community-edit',
  templateUrl: './community-edit.component.html',
  styleUrls: ['./community-edit.component.css']
})
export class CommunityEditComponent implements OnInit {
  modalRef: BsModalRef;
  id:number;
  community:Icommunity;
  editForm:FormGroup;
  constructor(private CommunityServiceService:CommunityServiceService,private modalService: BsModalService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.community = this.CommunityServiceService.getById(this.id);

    this.editForm=new FormGroup({
      name:new FormControl(),
      users:new FormControl(),
      privacy:new FormControl(),
    });
  }
  editCommunity(){
    this.community={
      id:this.id,
      name:this.editForm.get('name').value,
      users:this.editForm.get('users').value,
      privacy:this.editForm.get('privacy').value,
    }
    this.CommunityServiceService.update(this.community);
    this.route.navigate(['communityComponent']);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
