import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import {DrugServiceService}  from './../../shared/services/drug/drug-service.service';
import { Iactiveingredient } from '../../shared/models/interfaces/iactiveingredient';
import { IdrugType } from '../../shared/models/interfaces/Idrug-type';
import { Ishape } from '../../shared/models/interfaces/ishape';
import { Icolor } from '../../shared/models/interfaces/Icolor';
import { IstrengthUnit } from '../../shared/models/interfaces/Istrength-unit';
import {ActiveIngredientService} from './../../shared/services/active-ingredient/active-ingredient.service';
import {ColorService} from './../../shared/services/color/color.service';
import {DrugTypeService} from './../../shared/services/drug-type/drug-type.service';
import {ShapeService} from './../../shared/services/shape/shape.service';
import {StrengthService} from './../../shared/services/strength/strength.service';

@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit{
 title='';
 id:number;
 activeIngredients:Iactiveingredient[];
 types:IdrugType[];
 shapes:Ishape[];
 colors:Icolor[];
 strengthUnits:IstrengthUnit[];
 pill=false;
 myForm:FormGroup;
 drug:Idrug;
  constructor(private drugservice:DrugServiceService,private route:Router,private activeRoute :ActivatedRoute,private activeIngredientService:ActiveIngredientService,private colorService:ColorService,private shapeService:ShapeService,private strengthService:StrengthService,private drugTypeService:DrugTypeService) { 
 
  }
  
  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.title='ADD Drug';
    this.activeIngredients=this.activeIngredientService.getAll();
    this.types = this.drugTypeService.getAll();
    this.shapes= this.shapeService.getAll();
    this.colors=this.colorService.getAll();
    this.strengthUnits= this.strengthService.getAll();
    this.myForm = new FormGroup({
      tradeName : new FormControl(),
      company : new FormControl(),
      activeIngredient: new FormControl(),
      usage : new FormControl(),
      dosage : new FormControl(),
      pregnancyWarning : new FormControl(),
      childernWarning : new FormControl(),
      warning : new FormControl(),
      type : new FormControl(),
      textOnSide : new FormControl(),
      textOnOther : new FormControl(),
      shape : new FormControl(),
      color : new FormControl(),
      strength : new FormControl(),
      strengthUnit : new FormControl(),
      approvalHistory : new FormControl(),
      drugLogo : new FormControl(),
      pillImage : new FormControl()
 
    });
    if(this.id){
      debugger;
      this.title = 'Edit Drug';
      this.drug = this.drugservice.getById(this.id);
      this.activeIngredients=[];
      for(let i=0;i<this.drug.activeIngredient.length;i++){
        this.activeIngredients[i] = this.activeIngredientService.getById(this.drug.activeIngredient[i]);
      }
      this.strengthUnits = [];
      this.strengthUnits[0]= this.strengthService.getById(this.drug.strengthUnit);
      this.types = [];
      this.types[0]=this.drugTypeService.getById(this.drug.drugTypeName);
      if(this.types[0].name=== 'Tablets'){
         this.pill=true;
         this.colors = [];
         this.colors[0] = this.colorService.getById(this.drug.color);
         this.shapes=[];
         this.shapes[0]= this.shapeService.getById(this.drug.shape);
      }
      this.myForm.patchValue(
        {
          id:this.id,
          tradeName : this.drug.drugName,
          company : this.drug.company,
          //activeIngredient : this.drug.activeIngredient,
          usage : this.drug.usage,
          dosage : this.drug.dosage,
          pregnancyWarning : this.drug.pregnancyWarning,
          childernWarning : this.drug.childernWarning,
          warning : this.drug.warning,
          //type : this.drug.drugTypeName,
          textOnSide : this.drug.textOnSide,
          textOnOther : this.drug.textOnOtherSide,
          //shape : this.drug.shape,
          //color : this.drug.color,
          strength : this.drug.strength,
          //strengthUnit : this.drug.strengthUnit,
          //approvalHistory : this.drug.approvalHistory,
          //drugLogo : this.drug.image,
          //pillImage : this.drug.pillImage
        }
      );}     
  }
  callType(){
      for (let i in this.types) {
      if(this.types[i].name === "Tablets")
      {
        this.pill=true;
      }
      
   }
  }
  public onSubmit(){
    this.drug = {
      id:this.id,
      drugName : this.myForm.get('tradeName').value,
      company : this.myForm.get('company').value,
      activeIngredient : this.myForm.get('activeIngredient').value,
      usage : this.myForm.get('usage').value,
      dosage : this.myForm.get('dosage').value,
      pregnancyWarning : this.myForm.get('pregnancyWarning').value,
      childernWarning : this.myForm.get('childernWarning').value,
      warning : this.myForm.get('warning').value,
      drugTypeName : this.myForm.get('type').value,      
      strength : this.myForm.get('strength').value,
      strengthUnit : this.myForm.get('strengthUnit').value,
      approvalHistory : '',
      image : '',
      textOnSide : this.myForm.get('textOnSide').value,
      textOnOtherSide : this.myForm.get('textOnOther').value,
      shape:this.myForm.get('shape').value,
      color:this.myForm.get('color').value,
      pillImage:''
      
    };
    if(this.id){
      debugger;
      this.drugservice.save(this.drug);
    }
    else{
      debugger;
      this.drugservice.add(this.drug);
    }
    this.route.navigate(['/drug','listing']);
  }
}
