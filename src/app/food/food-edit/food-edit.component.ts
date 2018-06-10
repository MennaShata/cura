import { ActivatedRoute, Router, Route } from '@angular/router';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  constructor(private FoodService: FoodService, private ActivatedRoute:ActivatedRoute,private Router:Router) { }
  form:FormGroup
  food:Ifood;
  id:number;

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params)=>{this.id=params['id']});
    this.food = this.FoodService.getById(this.id);
    this.form = new FormGroup({
      foodname: new FormControl('', Validators.required),
      foodicon: new FormControl('', Validators.required)
    });
  }
  get foodName(){
    return this.form.get('foodname');
  }
  get foodIcon(){
    return this.form.get('foodicon');
  }
  updateFood(){
    debugger;
    this.food = {
      id: this.id,
      name: this.foodName.value,
      icon: this.foodIcon.value

    }
    this.FoodService.save(this.food);
    this.Router.navigate(['food/foodlist'])
  }

}