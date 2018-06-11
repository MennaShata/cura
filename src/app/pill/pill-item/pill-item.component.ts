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

@Component({
  selector: 'app-pill-item',
  templateUrl: './pill-item.component.html',
  styleUrls: ['./pill-item.component.css']
})
export class PillItemComponent implements OnInit {
  strengthUnit: IstrengthUnit;
  shape: Ishape;
  color: Icolor;

  @Input() pill: Ipill;
  constructor(private pillservice: PillService, private colorService: ColorService, private shapeService: ShapeService, private strengthService: StrengthService, ) { }

  deletePill(id: number) {
    this.pillservice.Delete(id);
  }

  ngOnInit() {
    this.strengthUnit = this.strengthService.getById(this.pill.strengthUnit);
    this.color = this.colorService.getById(this.pill.color);
    this.shape = this.shapeService.getById(this.pill.shape);
  }

}
