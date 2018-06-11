import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PillService } from '../../shared/services/pill/Pill.service';
import { DrugServiceService } from '../../shared/services/drug/drug-service.service';
import { Ishape } from '../../shared/models/interfaces/ishape';
import { Icolor } from '../../shared/models/interfaces/Icolor';
import { IstrengthUnit } from '../../shared/models/interfaces/Istrength-unit';
import { Idrug } from '../../shared/models/interfaces/Idrug';
import { Ipill } from '../../shared/models/interfaces/ipill';
import { FormGroup } from '@angular/forms';
import { ColorService } from '../../shared/services/color/color.service';
import { ShapeService } from '../../shared/services/shape/shape.service';
import { StrengthService } from '../../shared/services/strength/strength.service';
import { FormControl } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pill-edit',
  templateUrl: './pill-edit.component.html',
  styleUrls: ['./pill-edit.component.css']
})
export class PillEditComponent implements OnInit {
  title = '';
  id: number;
  shapes: Ishape[];
  colors: Icolor[];
  strengthUnits: IstrengthUnit[];
  editForm: FormGroup;
  drug: Idrug;
  pill: Ipill;
  

  constructor(private pillService: PillService, private drugService: DrugServiceService, private colorService: ColorService, private shapeService: ShapeService, private strengthService: StrengthService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => { this.id = params['id']; });
    this.title = 'Edit Pill';

    this.drug = this.drugService.getById(this.id);
    this.pill = this.pillService.getById(this.id);
    console.log(this.pill);
    this.strengthUnits = this.strengthService.getAll();
    this.colors = this.colorService.getAll();
    this.shapes = this.shapeService.getAll();


    this.editForm = new FormGroup({
      name: new FormControl(),
      textOnSide: new FormControl(),
      textOnOther: new FormControl(),
      shapeName: new FormControl(),
      colorName: new FormControl(),
      strength: new FormControl(),
      strengthUnitName: new FormControl(),
      pillImage: new FormControl()
    });

    this.editForm.patchValue(
      {
        id: this.id,
        name: this.pill.name,
        textOnSide: this.pill.frontImprint,
        textOnOther: this.pill.backImprint,
        strength: this.pill.strength,
        strengthUnitName: this.strengthService.getById(this.pill.strengthUnit),
        colorName: this.colorService.getById(this.pill.color),
        shapeName: this.shapeService.getById(this.pill.shape)

      }
    );

  }

  updatePill() {
    this.pill = {
      id: this.id,
      name: this.editForm.get('name').value,
      frontImprint: this.editForm.get('textOnSide').value,
      backImprint: this.editForm.get('textOnOther').value,
      shape: this.editForm.get('shapeName').value,
      color: this.editForm.get('colorName').value,
      strength: this.editForm.get('strength').value,
      strengthUnit: this.editForm.get('strengthUnitName').value,
      image: this.editForm.get('pillImage').value
    }
    this.pillService.Update(this.pill);
    this.route.navigate(['pill/page']);
  }

}
