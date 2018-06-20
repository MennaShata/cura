import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NgControl} from '@angular/forms';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-disease-edit',
  templateUrl: './disease-edit.component.html',
  styleUrls: ['./disease-edit.component.css']
})
export class DiseaseEditComponent implements OnInit {
//   disease: Idisease;
//   name: string;
//   description: string;
//   hours: number;

//   getDisease() {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.disease = this.DiseaseServiceService.getDisease(id);
//     //console.log(this.disease);
//   }
//   update(form) {
//     //debugger;
//     this.disease = this.DiseaseServiceService.getDisease(this.disease.id);
//     console.log(this.disease);
//     var i = this.DiseaseServiceService.diseases.indexOf(this.disease);
//     console.log(i);
//     this.disease = {
//       id: this.disease.id,
//       name: form.value.name == undefined ? this.disease.name : form.value.name,
//       descripton: form.value.name == undefined ? this.disease.descripton : form.value.descripton,
//       bodyParts: form.value.bodyParts == undefined ? this.disease.bodyParts : form.value.bodyParts,
//       treatedDrugs: form.value.treatedDrugs == undefined ? this.disease.treatedDrugs : form.value.treatedDrugs,
//       forbiddenDrugs: form.value.forbiddenDrugs == undefined ? this.disease.forbiddenDrugs : form.value.forbiddenDrugs,
//     }
//     this.DiseaseServiceService.diseases[i] = this.disease;
//     console.log(this.DiseaseServiceService.diseases);
//     this.DiseaseServiceService.edit(this.disease).subscribe();
//     this.router.navigate(['disease/component']);
//   }

//   constructor(private DiseaseServiceService: DiseaseServiceService,private route: ActivatedRoute,private router: Router) { }

//   ngOnInit() {
//     this.getDisease();
//   }
// }
  @Input() id:number;
  disease:Idisease;
  editForm:FormGroup;
  // modalRef:BsModalRef;
  constructor(private diseaseServiceService:DiseaseServiceService,private activatedRoute:ActivatedRoute,private route:Router,public BsModalRef: BsModalRef) { }

  ngOnInit() {
    if(this.id == undefined)
    {
      this.activatedRoute.params.subscribe((params)=>{this.id=params['id']});
    }
    // this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.disease = this.diseaseServiceService.getById(this.id);
    this.editForm=new FormGroup({
      name:new FormControl(),
      descripton:new FormControl(),
      bodyParts:new FormControl(),
      treatedDrugs:new FormControl(),
      forbiddenDrugs:new FormControl()
    });
  }
  updateDisease(){
    this.disease={
      id:this.id,
      name:this.editForm.get('name').value,
      descripton:this.editForm.get('descripton').value,
      bodyParts:this.editForm.get('bodyParts').value,
      treatedDrugs:this.editForm.get('treatedDrugs').value,
      forbiddenDrugs:this.editForm.get('forbiddenDrugs').value
    }
    this.diseaseServiceService.update(this.disease);
    this.route.navigate(['/disease/component']);
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  closeModal(){
      this.BsModalRef.hide();
    
  }
}
