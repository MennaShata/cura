import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { SideeffectService } from '../../shared/services/side-effect/sideeffect.service';
import { BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-side-effect-add',
  templateUrl: './side-effect-add.component.html',
  styleUrls: ['./side-effect-add.component.css']
})
export class SideEffectAddComponent implements OnInit {
sideeffect:Isideeffect;
myForm:FormGroup;
flag = true;
  constructor(private sideeffectService:SideeffectService,public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
     
      
    });
  }
public addsideeffect(){
  
  if(this.myForm.get('name').value!=''&&this.myForm.get('description').value!='')
  {
  this.sideeffect={
    name:this.myForm.get('name').value,
    description:this.myForm.get('description').value,
    
  }
  this.sideeffectService.add(this.sideeffect)
}
else{
this.flag = false
}
}
}
