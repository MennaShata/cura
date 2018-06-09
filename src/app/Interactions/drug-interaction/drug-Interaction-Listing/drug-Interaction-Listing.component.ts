import { Component, OnInit } from '@angular/core';
import { IdrugInteraction } from '../../../shared/models/interfaces/IdrugInteraction';
import { DrugInteractionService } from '../../../shared/services/drugInteraction/drugInteraction.service';
import { Idrug } from '../../../shared/models/interfaces/Idrug';
import {DrugServiceService} from '../../../shared/services/drug/drug-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drug-Interaction-Listing',
  templateUrl: './drug-Interaction-Listing.component.html',
  styleUrls: ['./drug-Interaction-Listing.component.css']
})
export class DrugInteractionListingComponent implements OnInit {
  public drugName: string = '';
  public drugArray: string[] = [];
  public drugs:Idrug[]=[];
  public allDrugsName:string[];
  public drugInteractions: IdrugInteraction[] = [];
  constructor(private drugInteractionService: DrugInteractionService,private drugService:DrugServiceService) { }

  ngOnInit() {
    this.allDrugsName = this.drugService.getAllDrugsName();
  }
  addList() {
    let flag:boolean=false;
    this.drugService.getAllDrug().subscribe(
      
      (data)=>{this.drugs=data}
    )
   for(let i=0;i<this.drugs.length;i++)
   {
     if(this.drugName == this.drugs[i].drugName){
      var list = document.getElementById("DrugList").classList.add("show");
      var listBody = document.getElementById("ListBody");
      var itemRow = document.createElement('tr');
      var itemName = document.createElement('td');
      var itemFun = document.createElement('td');
      listBody.appendChild(itemRow);
      var DelElement = '<div class="five-functions text-left">' + '<a href="#"><i class="fa fa-edit" style="margin-right:4px;"></i></a>' + '<a href="" (click)="deleteItem($this)"><i class="fa fa-trash-o"></i></a>' + '</div>';
      itemFun.innerHTML = DelElement;
      itemRow.appendChild(itemFun);
      itemRow.appendChild(itemName);
      itemName.innerHTML = this.drugName;
      this.drugArray.push(this.drugName);
      flag=true;
      break;

     }
   }
   if(flag== false){
    alert("This Drug Not Found....Please,Enter Correct Name");
  }
    
  }

  deleteItem(item) {
    this.drugArray.splice(item);
  }
  drugInteraction() {
    this.drugInteractions = this.drugInteractionService.checkInteraction(this.drugArray);
  }
}
