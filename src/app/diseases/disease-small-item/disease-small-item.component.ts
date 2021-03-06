import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';
import { DiseaseServiceService } from '../../shared/services/disease-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { DiseaseEditComponent } from '../disease-edit/disease-edit.component';

@Component({
  selector: 'app-disease-small-item',
  templateUrl: './disease-small-item.component.html',
  styleUrls: ['./disease-small-item.component.css']
})
export class DiseaseSmallItemComponent implements OnInit {
  // @Input() disease:Idisease;
  // constructor(private DiseaseServiceService:DiseaseServiceService) { }

  // ngOnInit() {
  // }
  // delete(id){
  //   this.DiseaseServiceService.delete(id);
  // }
  @Input() disease:Idisease;
  bsModalRef: BsModalRef;
  constructor(private diseaseServiceService:DiseaseServiceService,private modalService: BsModalService) { }

  ngOnInit() {
    this.disease.descripton=this.TrimMaxLength(this.disease.descripton,100);
  }
  public TrimMaxLength(str, maxLength) {
    var res = str;
    if (str.length > maxLength) {
        res = str.substr(0, maxLength);
        res = res.concat("...");
    }
    return res;
  }
  deleteDisease(id:number){
    this.diseaseServiceService.delete(id);
  }
  public openEditModalWithComponent(_id:number) {
    const initialState = {
      id: _id
    };
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(DiseaseEditComponent,{initialState});
  }
 
}

