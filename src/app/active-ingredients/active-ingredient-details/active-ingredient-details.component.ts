import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iactiveingredient } from './../../shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from './../../shared/services/active-ingredient/active-ingredient.service';

@Component({
  selector: 'app-active-ingredient-details',
  templateUrl: './active-ingredient-details.component.html',
  styleUrls: ['./active-ingredient-details.component.css']
})
export class ActiveIngredientDetailsComponent implements OnInit {

  public ai:Iactiveingredient;
  id:number;
  constructor(private ActiveIngredientService:ActiveIngredientService , private ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.ai = this.ActiveIngredientService.getById(this.id);
  }

}
