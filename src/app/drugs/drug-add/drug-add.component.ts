import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import {DrugServiceService}  from './../../shared/services/drug/drug-service.service';

@Component({
  selector: 'app-drug-add',
  templateUrl: './drug-add.component.html',
  styleUrls: ['./drug-add.component.css']
})
export class DrugAddComponent implements OnInit{
 title='';
 id:number;
 activeIngredients:string[];
 types:string[];
 shapes:string[];
 colors:string[];
 strengthUnits:string[];
 pill=false;
 myForm:FormGroup;
 drug:Idrug;
  constructor(private drugservice:DrugServiceService,private route:Router,private activeRoute :ActivatedRoute) { 
 
  }
  
  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.title='ADD Drug';
    this.activeIngredients=['paracetamol','dextromethorphan','acetylsalicylic acid','Acetaminophen','Dextromethorphan','Diphenhydramine'];
    this.types=['Tablets ','capsules','softgels','liquids','chewables','powders'];
    this.shapes=['Round','Oblong','Oval','Square','Rectangle','Diamond','Other'];
    this.colors=['White','Off White','Orange','Yellow','Gray','Green','Tan','Brown','Red','Pink','Peach','Gold','Blue','Purple','Lavander','Multi Color'];
    this.strengthUnits=['gram','mg','ml'];
    this.myForm = new FormGroup({
      tradeName : new FormControl(),
      company : new FormControl(),
      activeIngredient : new FormControl(),
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
      this.title = 'Edit Drug';
      this.drug = this.drugservice.getById(this.id);
      this.activeIngredients = this.drug.activeIngredient;
      this.strengthUnits = [];
      this.strengthUnits[0]= this.drug.strengthUnit;
      this.types= this.drug.drugTypeName;
      this.myForm.patchValue(
        {
          id:this.id,
          tradeName : this.drug.drugName,
          company : this.drug.company,
          activeIngredient : this.drug.activeIngredient,
          usage : this.drug.usage,
          dosage : this.drug.dosage,
          pregnancyWarning : this.drug.pregnancyWarning,
          childernWarning : this.drug.childernWarning,
          warning : this.drug.warning,
          type : this.drug.drugTypeName,
          textOnSide : this.drug.textOnSide,
          textOnOther : this.drug.textOnOtherSide,
          shape : this.drug.shape,
          color : this.drug.color,
          strength : this.drug.strength,
          strengthUnit : this.drug.strengthUnit,
          approvalHistory : this.drug.approvalHistory,
          drugLogo : this.drug.image,
          pillImage : this.drug.pillImage
        }
      );}     
  }
  callType(){
    debugger;
     //   for (let i in this.myForm.get("type")) {
  //     if(i =='Tablets')
  //     {
  //       this.pill=true;
  //     }
      
  //  }
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
      approvalHistory : this.myForm.get('approvalHistory').value,
      image : this.myForm.get('drugLogo').value,
      textOnSide : this.myForm.get('textOnSide').value,
      textOnOtherSide : this.myForm.get('textOnOther').value,
      shape:this.myForm.get('shape').value,
      color:this.myForm.get('color').value,
      pillImage:this.myForm.get('pillImage').value
      
    };
    if(this.id){
      this.drugservice.save(this.drug);
    }
    else{
      this.drugservice.add(this.drug);
    }
    this.route.navigate(['/drug','listing']);
  }
}
