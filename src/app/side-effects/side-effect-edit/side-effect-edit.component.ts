import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { SideeffectService } from '../../shared/services/side-effect/sideeffect.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-side-effect-edit',
  templateUrl: './side-effect-edit.component.html',
  styleUrls: ['./side-effect-edit.component.css']
})
export class SideEffectEditComponent implements OnInit {
  Myform:FormGroup
  sideeffect:Isideeffect;
  @Input() id:number
  
  constructor(private sideeffectService: SideeffectService, private ActivatedRoute:ActivatedRoute,private Router:Router,public BsModalRef: BsModalRef) { }
  
  ngOnInit() {
    if(this.id == undefined)
    {
      this.ActivatedRoute.params.subscribe((params)=>{this.id=params['id']});
    }

    this.sideeffect = this.sideeffectService.getById(this.id);
    this.Myform = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.Myform.patchValue({
      name: this.sideeffect.name,
      description: this.sideeffect.description
    });
  }

  updatesideeffect(){
    if (this.Myform.get('name').value != '' && this.Myform.get('description').value != '')
    {
      this.sideeffect = {
      id: this.id,
      name: this.Myform.get('name').value,
      description: this.Myform.get('description').value
      

    }
    this.sideeffectService.save(this.sideeffect)
    //this.Router.navigate(['listing'])
  }
  }
  closeModal(){
    if(this.Myform.valid){
      this.BsModalRef.hide();

    }
  }
}
