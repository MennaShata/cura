import { Component, OnInit } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug/drug-service.service';
import {DrugTypeService} from './../../shared/services/drug-type/drug-type.service';
import {StrengthService} from './../../shared/services/strength/strength.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import { ActivatedRoute } from '@angular/router';
import { DiseaseServiceService} from './../../shared/services/disease-service.service';
import {FoodInteractionService} from './../../shared/services/foodInteraction.service';
import {SideeffectService} from './../../shared/services/side-effect/sideeffect.service';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { IfoodInteraction } from '../../shared/models/interfaces/ifoodInteraction';
import { Iactiveingredient } from '../../shared/models/interfaces/iactiveingredient';
import {ActiveIngredientService} from './../../shared/services/active-ingredient/active-ingredient.service';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  public drug:Idrug;
  public pregnancyWarningSrc:string;
  public childernWarningSrc:string;
  public drugType:string;
  public strengthUnit:string;
  id:number;
  public sideEffect:Isideeffect[]=[];
  public disease:Idisease[]=[];
  public foodInteraction:IfoodInteraction[]=[];
  public activeIngredient:Iactiveingredient[]=[];
  constructor(private drugService:DrugServiceService,private activatedRoute:ActivatedRoute,private drugTypeService:DrugTypeService,private strengthService:StrengthService,private sideEffectService:SideeffectService,private diseaseService:DiseaseServiceService,private foodInteractionService:FoodInteractionService,private activeIngredientService:ActiveIngredientService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.drug = this.drugService.getById(this.id);
    this.drugType = this.drugTypeService.getName(this.drug.drugTypeName);
    this.strengthUnit = this.strengthService.getName(this.drug.strengthUnit);
    if(this.drug.pregnancyWarning == true){
      this.pregnancyWarningSrc = '../../../assets/images/pregnancy-danager.jpg';
    }
    else{
      this.pregnancyWarningSrc='../../../assets/images/allowPregnancy.png';
    }
    if(this.drug.childernWarning == true){
      this.childernWarningSrc = '../../../assets/images/child-danger.jpg';
    }
    else{
      this.childernWarningSrc = '../../../assets/images/allowChildern.png';
    }
    for(let i=0;i<this.drug.activeIngredient.length;i++){
      this.activeIngredient[i] = this.activeIngredientService.getById(this.drug.activeIngredient[i]);
      for(let j=0;j<this.activeIngredient[i].diseases.length;j++){
        this.disease[j] = this.diseaseService.getDisease(this.activeIngredient[i].diseases[j]);
      }
      for(let j=0;j<this.activeIngredient[i].sideEffect.length;j++){
      this.sideEffect[j] = this.sideEffectService.getById(this.activeIngredient[i].sideEffect[j]);
      }
      for(let j=0;j<this.activeIngredient[i].foodinteractions.length;j++){
      this.foodInteraction[j] = this.foodInteractionService.getById(this.activeIngredient[i].foodinteractions[j]);
      }
    }
  }

}
