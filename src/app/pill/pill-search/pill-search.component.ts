import { Component, OnInit } from '@angular/core';
import { PillService } from '../../shared/services/pill/Pill.service';
import { ColorService } from '../../shared/services/color/color.service';
import { ShapeService } from '../../shared/services/shape/shape.service';
import { FormControl } from '@angular/forms';
import { FormGroup,  Validators } from '@angular/forms';
import { Ishape } from '../../shared/models/interfaces/ishape';
import { Icolor } from '../../shared/models/interfaces/Icolor';
import { Ipill } from '../../shared/models/interfaces/ipill';

@Component({
  selector: 'app-pill-search',
  templateUrl: './pill-search.component.html',
  styleUrls: ['./pill-search.component.css']
})
export class PillSearchComponent implements OnInit {

  color: number;
  shape: number;
  backImprint:string;
  frontImprint: string;
  searchForm: FormGroup;
  shapes: Ishape[];
  colors: Icolor[];
  pill: any;
  // public menuMessage: any ;

  constructor(private pillService: PillService, private colorService: ColorService, private shapeService: ShapeService) { }

  ngOnInit() {
    // this.menuMessage = "countryCodeAFcountryNameAfghanistan";
    this.colors = this.colorService.getAll();
    this.shapes = this.shapeService.getAll();
    


    this.searchForm = new FormGroup({
      FrontImprint: new FormControl(),
      BackImprint: new FormControl(),
      Shape: new FormControl(null),
      Color: new FormControl(),
    });
    //  debugger;
    //  console.log(this.searchForm.controls['Shape']);
    //  console.log((<FormGroup>this.searchForm).controls['Shape']);
    //  this.searchForm.controls['Shape'].patchValue(this.default);
    // (<FormGroup>this.searchForm).controls['Shape'].setValue(this.menuMessage, {onlySelf: true});
  }
   
  searchPill() {
   console.log("ana gwa al ts lsa hro7 ll service");

   console.log(this.searchForm.get('FrontImprint').value);
   console.log(this.searchForm.get('BackImprint').value);
   console.log(this.searchForm.get('Color').value);
   console.log(this.searchForm.get('Shape').value);
  
      this.frontImprint = this.searchForm.get('FrontImprint').value;
      this.backImprint = this.searchForm.get('BackImprint').value;
      this.shape = this.searchForm.get('Shape').value;
      this.color = this.searchForm.get('Color').value;
    //debugger;
    this.pillService.Search(this.frontImprint,this.backImprint,this.shape,this.color);
  }


  // front = document.getElementById("Front");
  // back = document.getElementById("Back");
  // inputDropColor = document.getElementById("Color");
  // inputDropShape = document.getElementById("Shape");

  // disableFunction() {
  //   if (this.front.value.length > 0 || back.value.length > 0) {
  //     document.getElementById('search_button').disabled = false;

  //   } else if (front.value.length == 0 && back.value.length == 0 && inputDropColor.options[inputDropColor.selectedIndex].text == "None Selected" && inputDropShape.options[inputDropShape.selectedIndex].text == "None Selected") {
  //     document.getElementById('search_button').disabled = true;
  //   }
  // }

  // inputDropColor.addEventListener('change', function() {
  //   var strColor = inputDropColor.options[inputDropColor.selectedIndex].text;
  //   if (strColor != "None Selected") {
  //     document.getElementById('search_button').disabled = false;
  //   }
  //   if (strColor == "None Selected" && front.value.length == 0 && back.value.length == 0) {
  //     document.getElementById('search_button').disabled = true;
  //   }
  // });

  // inputDropShape.addEventListener('change', function() {
  //   var strShape = inputDropShape.options[inputDropShape.selectedIndex].text;
  //   if (strShape != "None Selected") {
  //     document.getElementById('search_button').disabled = false;
  //   }
  //   if (strShape == "None Selected" && front.value.length == 0 && back.value.length == 0) {
  //     document.getElementById('search_button').disabled = true;
  //   }
  // });

}
