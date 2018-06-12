import { Component, OnInit, Input } from '@angular/core';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { SideeffectService } from '../../shared/services/side-effect/sideeffect.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { SideEffectEditComponent } from '../side-effect-edit/side-effect-edit.component';

@Component({
  selector: 'app-side-effect-item',
  templateUrl: './side-effect-item.component.html',
  styleUrls: ['./side-effect-item.component.css']
})
export class SideEffectItemComponent implements OnInit {

 @Input() public sideeffect :Isideeffect;
 bsModalRef: BsModalRef;
  constructor(private sideeffectService:SideeffectService,private modalService: BsModalService) {
   }

  ngOnInit() {
  }
  public delete(id){
    this.sideeffectService.Delete(id);
   }

   public openEditModalWithComponent(_id:number) {
    const initialState = {
      id: _id
    };
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(SideEffectEditComponent,{initialState});
  }
}
