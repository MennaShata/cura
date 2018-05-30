import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';

@Component({
  selector: 'app-active-ingredient-add',
  templateUrl: './active-ingredient-add.component.html',
  styleUrls: ['./active-ingredient-add.component.css']
})
export class ActiveIngredientAddComponent implements OnInit {

  activeingredient:Iactiveingredient;
  myForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name:new FormControl(),
      description:new FormControl()
    });
  }

  addActiveIngredient(){
  }

}
