import { Component, OnInit } from '@angular/core';
import { Ipill } from '../../shared/models/interfaces/ipill';
import { Input } from '@angular/core';
import { PillService } from '../../shared/services/pill/Pill.service';
import { ColorService } from '../../shared/services/color/color.service';
import { ShapeService } from '../../shared/services/shape/shape.service';
import { StrengthService } from '../../shared/services/strength/strength.service';
import { Ishape } from '../../shared/models/interfaces/ishape';
import { Icolor } from '../../shared/models/interfaces/Icolor';
import { IstrengthUnit } from '../../shared/models/interfaces/Istrength-unit';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PillEditComponent } from '../pill-edit/pill-edit.component';

@Component({
  selector: 'app-pill-item',
  templateUrl: './pill-item.component.html',
  styleUrls: ['./pill-item.component.css']
})
export class PillItemComponent implements OnInit {

  bsModalRef: BsModalRef;

  @Input() pill: Ipill;
  constructor(private pillservice: PillService, private colorService: ColorService, private shapeService: ShapeService, private strengthService: StrengthService, private modalService: BsModalService) { }


  deletePill(id: number) {
    console.log("ana gwa al delete ts");
    this.pillservice.Delete(id);
  }

  getStrengthUnit() {
    return this.strengthService.getById(this.pill.strengthUnit).name;
  }
  getColor() {
    return this.colorService.getById(this.pill.color).name;
  }
  getShape() {
    return this.shapeService.getById(this.pill.shape).name;
  }

  ngOnInit() {
   
  }

  public openModalWithComponent(_id: number) {
    const initialState =
      {
        id: _id
      }
    this.bsModalRef = this.modalService.show(PillEditComponent, { initialState });
  }
}
