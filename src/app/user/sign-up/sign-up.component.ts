import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Iuser } from '../../shared/models/interfaces/Iuser';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: Iuser={
    username:'',
    email:'',
    password:''
  }
  constructor(public bsModalRef: BsModalRef) { }

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
    password:""
  }
}

}
}
