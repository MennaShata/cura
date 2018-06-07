import { Component, OnInit, TemplateRef } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunityServiceService } from '../../shared/services/community-service.service';


@Component({
  selector: 'app-community-add',
  templateUrl: './community-add.component.html',
  styleUrls: ['./community-add.component.css']
})
export class CommunityAddComponent implements OnInit {
  community:Icommunity;
  myForm:FormGroup;
  modalRef: BsModalRef;
  constructor(private CommunityServiceService:CommunityServiceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      name:new FormControl(),
      users:new FormControl(),
      privacy:new FormControl()
    });
  }
  addCommunity(){
    debugger;
    this.community={
      id:5,
      name: this.myForm.get('name').value,
      users:this.myForm.get('users').value,
      privacy:this.myForm.get('privacy').value
    }
    this.CommunityServiceService.add(this.community);
    this.myForm.reset();
    this.modalRef.hide();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
