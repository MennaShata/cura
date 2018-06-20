import { Injectable } from '@angular/core';
import { Iuser } from '../../models/interfaces/Iuser';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http/src/response'

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:15033';
  users:Iuser[]

constructor(private http: HttpClient) { 

}
registerUser(user : Iuser){
  const body: Iuser = {
    username: user.username,
    password: user.password,
    email: user.email,
   // confirmPassword: user.confirmPassword
  }
  return this.http.post(this.rootUrl + '/api/User/Register', body);
}
userAuthentication(userName, password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}
}
