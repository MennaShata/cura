
import { Router, ActivatedRoute } from '@angular/router';
import { Ifood } from './../../shared/models/interfaces/ifood';

import { FoodService } from './../../shared/services/food.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FoodAddComponent } from '../food-add/food-add.component';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.css']
})
export class FoodListingComponent implements OnInit {
  bsModalRef: BsModalRef
  public foodlist: Ifood[];
  name:string = '';
  constructor(private FoodService: FoodService, private router: Router,private modalService: BsModalService) {
   }

  ngOnInit() {  
      this.FoodService.getFoodList().subscribe(res => {this.foodlist = res; debugger} );
    
  }
//   btnClick= function () {
//     this.router.navigate(['/addFood']);
// };
public openModalWithComponent() {
  /* this is how we open a Modal Component from another component */
  this.bsModalRef = this.modalService.show(FoodAddComponent, Object.assign({},{ class:'modal-lg'}));
}

}
