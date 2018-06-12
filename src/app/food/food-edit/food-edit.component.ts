import { ActivatedRoute, Router, Route } from '@angular/router';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  constructor(private FoodService: FoodService, private ActivatedRoute:ActivatedRoute,private Router:Router,public BsModalRef: BsModalRef) { }
  form:FormGroup
  food:Ifood;
  @Input() id:number;

  ngOnInit() {
    if(this.id == undefined)
    {
      this.ActivatedRoute.params.subscribe((params)=>{this.id=params['id']});
    }
    //console.log(this.id);
    this.food = this.FoodService.getById(this.id);
    this.form = new FormGroup({
      foodname: new FormControl('', Validators.required),
      foodicon: new FormControl('', Validators.required)
    });
    this.form.patchValue({
      foodname: this.food.name,
      foodicon: this.food.icon
    });
  }
  get foodName(){
    return this.form.get('foodname');
  }
  get foodIcon(){
    return this.form.get('foodicon');
  }
  updateFood(){
    console.log(this.food)
    console.log(this.form.valid)
    // if(!this.foodName.touched && !this.foodIcon.touched){
    //   this.FoodService.save(this.food);
    // }
    
      this.food = {
      id: this.id,
      name: this.foodName.value,
      icon: this.foodIcon.value
      

    }
    console.log(this.food)
    this.FoodService.save(this.food);
    
   
    
    this.Router.navigate(['food/foodlist'])
  }
  closeModal(){
    if(this.form.valid){
      this.BsModalRef.hide();

    }
  }

}