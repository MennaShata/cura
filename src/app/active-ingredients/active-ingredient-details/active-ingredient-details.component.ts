import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iactiveingredient } from './../../shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from './../../shared/services/active-ingredient/active-ingredient.service';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';
import { DrugServiceService } from 'src/app/shared/services/drug/drug-service.service';
import { IfoodInteraction } from 'src/app/shared/models/interfaces/ifoodInteraction';
import { FoodInteractionService } from 'src/app/shared/services/foodInteraction.service';
import { DiseaseServiceService } from 'src/app/shared/services/disease-service.service';
import { Idisease } from 'src/app/shared/models/interfaces/idisease';

@Component({
  selector: 'app-active-ingredient-details',
  templateUrl: './active-ingredient-details.component.html',
  styleUrls: ['./active-ingredient-details.component.css']
})
export class ActiveIngredientDetailsComponent implements OnInit {

  public ai: Iactiveingredient;
  id: number;
  drugs: Idrug[] = [];
  foodinteractions: IfoodInteraction[] = [];
  diseases: Idisease[] = [];
  constructor(private ActiveIngredientService: ActiveIngredientService, private ActivatedRoute: ActivatedRoute, private ds: DrugServiceService, private fis: FoodInteractionService, private diseaseservice: DiseaseServiceService) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params) => { this.id = params['id']; });
    this.ai = this.ActiveIngredientService.getById(this.id);

    for (let i = 0; i < this.ai.drugs.length; i++) {
      this.drugs[i] = this.ds.getById(this.ai.drugs[i]);
    }
    for (let i = 0; i < this.ai.foodinteractions.length; i++) {
      this.foodinteractions[i] = this.fis.getById(this.ai.foodinteractions[i]);
    }
    for(let i=0;i<this.ai.diseases.length;i++){
      this.diseases[i]= this.diseaseservice.getDisease(this.ai.diseases[i]);
    }

  }

}
