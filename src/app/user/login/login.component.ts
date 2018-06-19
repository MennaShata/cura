import { Iuser } from './../../shared/models/interfaces/Iuser';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Iuser;

  constructor(public bsModalRef: BsModalRef, private Http:Http, private Router:Router) {
    this.user = {
      username: '',
      email:'',
      password:'',
      confirmPassword:''
    }
    
   }
   public login(){
     if(this.user.username && this.user.email && this.user.password){
       let headers = new Headers({'content-type':'application/json'});
       let options = new RequestOptions({headers: headers});
       this.Http.post('http://localhost:4200/login', JSON.stringify(this.user), options)
          // .map(result => result.json())
      //     .subscribe(result => {
      //       this.Router.navigate(["/profile"], {'queryParams': result})
      //  })
     }
   }

  ngOnInit() {
  }

}
