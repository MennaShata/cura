import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iactiveingredient } from './../../shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from './../../shared/services/active-ingredient/active-ingredient.service';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';
import { DrugServiceService } from 'src/app/shared/services/drug/drug-service.service';

@Component({
  selector: 'app-active-ingredient-details',
  templateUrl: './active-ingredient-details.component.html',
  styleUrls: ['./active-ingredient-details.component.css']
})
export class ActiveIngredientDetailsComponent implements OnInit {

  public ai:Iactiveingredient;
  id:number;
  drugs:Idrug[]=[];
  constructor(private ActiveIngredientService:ActiveIngredientService ,private ActivatedRoute:ActivatedRoute,private ds:DrugServiceService) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.ai = this.ActiveIngredientService.getById(this.id);
    
    for(let i=0;i<this.ai.drugs.length;i++){
      this.drugs[i] = this.ds.getById(this.ai.drugs[i]);
    }
  }

}
