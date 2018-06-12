import { FoodAddComponent } from './../food-add/food-add.component';
import { FoodEditComponent } from './../food-edit/food-edit.component';
import { FoodService } from './../../shared/services/food.service';
import { Ifood } from './../../shared/models/interfaces/ifood';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() food:Ifood;
  bsModalRef: BsModalRef;
  constructor(private FoodService:FoodService,private modalService: BsModalService) { }
  onDelete(id:number){
    this.FoodService.deleteFood(id);
  }
  onUpdate(id:number){
    
  }
 
  public openEditModalWithComponent(_id:number) {
    const initialState = {
      id: _id
    };
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(FoodEditComponent,{initialState});
  }

  ngOnInit() {
   
  }

}
