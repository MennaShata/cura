import { Component, OnInit } from '@angular/core';
import { PillService } from '../../shared/services/pill/Pill.service';
import { ColorService } from '../../shared/services/color/color.service';
import { ShapeService } from '../../shared/services/shape/shape.service';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Ishape } from '../../shared/models/interfaces/ishape';
import { Icolor } from '../../shared/models/interfaces/Icolor';
import { Ipill } from '../../shared/models/interfaces/ipill';
import { HelperFunctions } from '../../shared/classes/helper';

@Component({
  selector: 'app-pill-search',
  templateUrl: './pill-search.component.html',
  styleUrls: ['./pill-search.component.css']
})
export class PillSearchComponent implements OnInit {
  isDisabled = true;
  color: any;
  shape: any;
  backImprint: string;
  frontImprint: string;
  searchForm: FormGroup;
  shapes: Ishape[];
  colors: Icolor[];
  pill: any;


  constructor(private pillService: PillService, private colorService: ColorService, private shapeService: ShapeService) { }

  ngOnInit() {

    this.colors = this.colorService.getAll();
    this.shapes = this.shapeService.getAll();

    this.searchForm = new FormGroup({
      FrontImprint: new FormControl(),
      BackImprint: new FormControl(),
      Shape: new FormControl(null),
      Color: new FormControl(),
    });

  }

  onDataChanged() {
    this.frontImprint = this.searchForm.get('FrontImprint').value;
    this.backImprint = this.searchForm.get('BackImprint').value;
    this.shape = this.searchForm.get('Shape').value;
    this.color = this.searchForm.get('Color').value;

    if (!HelperFunctions.isNullOrEmpty(this.frontImprint) || !HelperFunctions.isNullOrEmpty(this.backImprint) || (!HelperFunctions.isNullOrEmpty(this.color) && this.color != 0) || (!HelperFunctions.isNullOrEmpty(this.shape) && this.shape != 0)) {
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }

  }

  searchPill() {

    this.frontImprint = this.searchForm.get('FrontImprint').value;
    this.backImprint = this.searchForm.get('BackImprint').value;
    this.shape = this.searchForm.get('Shape').value;
    this.color = this.searchForm.get('Color').value;

    let pill: Ipill = {
      frontImprint: this.frontImprint,
      backImprint: this.backImprint,
      shape: this.shape,
      color: this.color
    };
    this.pillService.onSerch.next(pill);

    if(this.pillService.Search(this.frontImprint, this.backImprint, this.shape, this.color).length > 0){
      console.log("ana  3mlt scroll ok !!");
      window.scrollTo(0, 600);
    }
   
    //this.pillService.Search(this.frontImprint,this.backImprint,this.shape,this.color);
  }

}
