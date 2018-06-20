import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Iuser } from '../../shared/models/interfaces/Iuser';
import { NgForm } from '@angular/forms';
import { UserService} from './../../shared/services/user/user.service'
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor( private UserService:UserService, private toastr: ToastrService,private router : Router ) { }
  onSubmit(form: NgForm){
    this.UserService.registerUser(form.value)
    .subscribe((data:any)=>{
      if(data.Succeded == true){
        this.resetForm(form);
        this.toastr.success('User Registration Successfull')
        
      }
      else{
        this.toastr.error(data.Errors[0])
      }
      this.router.navigate[("/home")];;
    });

  }
  

  
  user: Iuser={
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit() {
    
    this.resetForm();
  }
resetForm(form?:NgForm)
{
  if (form!=null)
  {
  form.reset();
  this.user={
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }
}

}
}
