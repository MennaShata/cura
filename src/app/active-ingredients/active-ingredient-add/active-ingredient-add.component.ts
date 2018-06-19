import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray} from '@angular/forms';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from 'src/app/shared/services/active-ingredient/active-ingredient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';
import { DrugServiceService } from 'src/app/shared/services/drug/drug-service.service';
import { Idisease } from 'src/app/shared/models/interfaces/idisease';
import { DiseaseServiceService } from 'src/app/shared/services/disease-service.service';
import { IfoodInteraction } from 'src/app/shared/models/interfaces/ifoodInteraction';
import { FoodInteractionService } from 'src/app/shared/services/foodInteraction.service';

@Component({
  selector: 'app-active-ingredient-add',
  templateUrl: './active-ingredient-add.component.html',
  styleUrls: ['./active-ingredient-add.component.css']
})
export class ActiveIngredientAddComponent implements OnInit {

  activeingredients:Iactiveingredient[];
  length:number;
  title='';
  activeingredient:Iactiveingredient;
  drugs:Idrug[]=[];
  aiDrugs:number[]=[];

  foodinteractions:IfoodInteraction[];
  diseases:Idisease[]=[];
  aiDiseases:number[]=[];

  myForm:FormGroup;
  id:number;
  constructor(
    private ActiveIngredientService:ActiveIngredientService,
    private ds:DrugServiceService,
    private r:Router,
    private ar:ActivatedRoute,
    private diseaseservice:DiseaseServiceService,
    private fis:FoodInteractionService
  ){}

  ngOnInit() {
    this.title="Add Active Ingredient";
    this.ar.params.subscribe((params)=>{this.id=params['id'];});
    this.ds.getAllDrug().subscribe(
      (data)=>{this.drugs=data}
    )
    this.ActiveIngredientService.getAll().subscribe(
      (data)=> {this.activeingredients=data}
    );
    this.length = this.activeingredients.length;
    this.diseases=this.diseaseservice.getDiseases();
    this.foodinteractions = this.fis.getFoodInteractionList();

    this.myForm = new FormGroup({
      name:new FormControl(),
      description:new FormControl(),
      drugs:new FormControl(),
      diseases:new FormControl(),
      foodinteractions:new FormControl()
    });

    if(this.id){
      this.title="Edit Active Ingredient";
      this.activeingredient = this.ActiveIngredientService.getById(this.id);
      console.log(this.aiDrugs = this.activeingredient.drugs);

      this.myForm.patchValue({
        name : this.activeingredient.name,
        description : this.activeingredient.description,
        drugs : this.activeingredient.drugs,
        diseases: this.activeingredient.diseases,
        foodinteractions : this.activeingredient.foodinteractions
      });
    }

  }

  onSubmit(){
    console.log(this.myForm.get('drugs'));
    console.log(this.activeingredients.length);
    //console.log(this.aiDrugs = this.activeingredient.drugs);
    
    this.activeingredient = {
      id : (this.length+1) ,
      name : this.myForm.get('name').value,
      description : this.myForm.get('description').value,
      drugs: this.myForm.get('drugs').value,
      foodinteractions:this.myForm.get('foodinteractions').value,
      diseases:this.myForm.get('diseases').value
    }

  
    if(this.id){
      this.ActiveIngredientService.update(this.activeingredient);
    }
    else{
      this.ActiveIngredientService.Add(this.activeingredient)
    }
    this.r.navigate(['/activeingredient','listing']);
  }

}
