import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SideEffectAddComponent } from './side-effect-add/side-effect-add.component';

@Component({
  selector: 'app-side-effects',
  templateUrl: './side-effects.component.html',
  styleUrls: ['./side-effects.component.css']
})
export class SideEffectsComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  
  public openModalWithComponent() {
    this.bsModalRef = this.modalService.show(SideEffectAddComponent);
  }
  ngOnInit() {
  }

}
