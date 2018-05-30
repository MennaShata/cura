import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { SideeffectService } from '../../shared/services/side-effect/sideeffect.service';


@Component({
  selector: 'app-side-effect-add',
  templateUrl: './side-effect-add.component.html',
  styleUrls: ['./side-effect-add.component.css']
})
export class SideEffectAddComponent implements OnInit {
sideeffect:Isideeffect;
myForm:FormGroup;
  constructor(private sideeffectService:SideeffectService) { }

  ngOnInit() {
    this.myForm=new FormGroup({
      name:new FormControl(),
      description:new FormControl(),
      icon:new FormControl()
      
    });
  }
public addsideeffect(){
  this.sideeffect={
    name:this.myForm.get('name').value,
    description:this.myForm.get('description').value,
    icon:this.myForm.get('icon').value
  }
  this.sideeffectService.add(this.sideeffect)
}
}
