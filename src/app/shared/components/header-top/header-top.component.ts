import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../../../user/login/login.component';
import { SignUpComponent } from '../../../user/sign-up/sign-up.component';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
 // bsModalRef: BsModalRef;
  //signin: BsModalRef
  constructor() { }

  // public openLogin() {
  //   this.bsModalRef = this.modalService.show(LoginComponent);
  // }
  // openSignUp(){
  //   this.signin = this.modalService.show(SignUpComponent);
  // }
  ngOnInit() {
  }

}
