import { Component, OnInit } from '@angular/core';
import {DrugServiceService} from './../../shared/services/drug-service.service';
import {Idrug} from './../../shared/models/interfaces/Idrug';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  public drug:Idrug;
  id:number;
  constructor(private c:DrugServiceService,private r:ActivatedRoute) { }

  ngOnInit() {
    this.r.params.subscribe((params)=>{this.id=params['id'];});
    this.drug = this.c.getById(this.id);
  }

}
