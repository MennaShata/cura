import { Iuser } from './../../shared/models/interfaces/Iuser';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../shared/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router ) {

    
   }
  //  public login(){
  //    if(this.user.username && this.user.email && this.user.password){
  //      let headers = new Headers({'content-type':'application/json'});
  //      let options = new RequestOptions({headers: headers});
  //      this.Http.post('http://localhost:4200/login', JSON.stringify(this.user), options)
  //         // .map(result => result.json())
  //     //     .subscribe(result => {
  //     //       this.Router.navigate(["/profile"], {'queryParams': result})
  //     //  })
  //    }
  //  }

  ngOnInit() {
  }
  OnSubmit(userName,password){
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     localStorage.setItem('username',userName);
     this.router.navigate(['/home']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }
}
