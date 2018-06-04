import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {
  constructor(private FoodService: FoodService,public bsModalRef: BsModalRef) { }
  public food:Ifood;
  form: FormGroup;
  
  


  ngOnInit() {
    this.form = new FormGroup({
      foodname: new FormControl('', Validators.required),
      foodicon: new FormControl('', Validators.required)
    });
  }
  get foodname(){
    return this.form.get('foodname');
  }
  get foodicon(){
    return this.form.get('foodicon');
  }
  addFood(){
    this.food = {
      name: this.foodname.value,
      icon: this.foodicon.value

    }
    console.log(this.food)
    this.FoodService.add(this.food);
    console.log(this.FoodService.foodArray)
  }

}
