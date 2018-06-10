import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

 drugActiveIngredient:Iactiveingredient[];
 drugTypes:IdrugType[];
 drugColor:Icolor;
 drugShape:Ishape;
 drugStrengthUnit:IstrengthUnit;

  constructor(private drugservice:DrugServiceService,private route:Router,private activeRoute :ActivatedRoute,private activeIngredientService:ActiveIngredientService,private colorService:ColorService,private shapeService:ShapeService,private strengthService:StrengthService,private drugTypeService:DrugTypeService) { 
 
  }
  
  ngOnInit() {
    debugger;
    this.activeRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.title='ADD Drug';
    this.activeIngredients=this.activeIngredientService.getAll();
    this.types = this.drugTypeService.getAll();
    this.shapes= this.shapeService.getAll();
    this.colors=this.colorService.getAll();
    this.strengthUnits= this.strengthService.getAll();
    this.myForm = new FormGroup({
      tradeName : new FormControl('',Validators.required),
      company : new FormControl('',Validators.required),
      activeIngredient: new FormControl(),
      usage : new FormControl('',Validators.required),
      dosage : new FormControl('',Validators.required),
      pregnancyWarning : new FormControl('',Validators.required),
      childernWarning : new FormControl('',Validators.required),
      warning : new FormControl(),
      type : new FormControl(),
      textOnSide : new FormControl(),
      textOnOther : new FormControl(),
      shape : new FormControl(),
      color : new FormControl(),
      strength : new FormControl('',Validators.required),
      strengthUnit : new FormControl(),
      approvalHistory : new FormControl(),
      drugLogo : new FormControl(),
      pillImage : new FormControl()
 
    });
    if(this.id){
      debugger;
      this.title = 'Edit Drug';
      this.drug = this.drugservice.getById(this.id);
      // this.drugActiveIngredient=[];
      // for(let i=0;i<this.drug.activeIngredient.length;i++){
      //   this.drugActiveIngredient[i] = this.activeIngredientService.getById(this.drug.activeIngredient[i]);
      // }
      // this.drugStrengthUnit = this.strengthService.getById(this.drug.strengthUnit);
      // this.drugTypes = [];
      // this.drugTypes[0]=this.drugTypeService.getById(this.drug.drugTypeName);
      // if(this.drugTypes[0].name=== 'Tablets'){
      //    this.pill=true;
        //  this.drugColor= this.colorService.getById(this.drug.color);
        //  this.drugShape= this.shapeService.getById(this.drug.shape);
     // }
     for(let i=0;i<this.types.length;i++){
      if(this.types[i].name=== 'Tablets'){
          this.pill=true;
     }}
      this.myForm.patchValue(
        {
          id:this.id,
          tradeName : this.drug.drugName,
          company : this.drug.company,
          //activeIngredient : this.drugActiveIngredient,
          usage : this.drug.usage,
          dosage : this.drug.dosage,
          pregnancyWarning : this.drug.pregnancyWarning,
          childernWarning : this.drug.childernWarning,
          warning : this.drug.warning,
          //type : this.drugTypes,
          textOnSide : this.drug.textOnSide,
          textOnOther : this.drug.textOnOtherSide,
          shape : this.drugShape,
          color : this.drugColor,
          strength : this.drug.strength,
          strengthUnit : this.drugStrengthUnit,
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
    debugger;
    console.log(this.myForm.valid);
    if(this.myForm.valid)
    {
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



  cancelForm(){
    this.myForm.reset();
  }
}
