import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from 'src/app/shared/services/active-ingredient/active-ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-active-ingredient-add',
  templateUrl: './active-ingredient-add.component.html',
  styleUrls: ['./active-ingredient-add.component.css']
})
export class ActiveIngredientAddComponent implements OnInit {

  title='';
  activeingredient:Iactiveingredient;
  myForm:FormGroup;
  id:number;
  constructor(private ActiveIngredientService:ActiveIngredientService,private ar:ActivatedRoute) {

   }

  ngOnInit() {
    this.title="Add Active Ingredient"
    this.ar.params.subscribe((params)=>{this.id=params['id'];});

    this.myForm = new FormGroup({
      name:new FormControl(),
      description:new FormControl()
    });
    if(this.id){
      this.title="Edit Active Ingredient";
      this.activeingredient = this.ActiveIngredientService.getById(this.id);
      
    }
  }

  onSubmit(){

  }

}
