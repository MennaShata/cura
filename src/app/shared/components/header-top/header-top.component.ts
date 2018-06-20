import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../../../user/login/login.component';
import { SignUpComponent } from '../../../user/sign-up/sign-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {
 // bsModalRef: BsModalRef;
  //signin: BsModalRef
  usertoken:string
  notfound = false
  constructor(private router : Router) { }

  // public openLogin() {
  //   this.bsModalRef = this.modalService.show(LoginComponent);
  // }
  // openSignUp(){
  //   this.signin = this.modalService.show(SignUpComponent);
  // }
  ngOnInit() {
    this.usertoken = localStorage.getItem('userToken')
    if(this.usertoken==null){
      this.notfound =true
    }
   
  }
  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/user/login']);
  }
}
