import { Component, OnInit } from '@angular/core';
import { IdrugInteraction } from '../../../shared/models/interfaces/IdrugInteraction';
import { DrugInteractionService } from '../../../shared/services/drugInteraction/drugInteraction.service';

@Component({
  selector: 'app-drug-Interaction-Listing',
  templateUrl: './drug-Interaction-Listing.component.html',
  styleUrls: ['./drug-Interaction-Listing.component.css']
})
export class DrugInteractionListingComponent implements OnInit {
  public drugList = false;
  public drugName: string = '';
  public drugArray: string[] = ['bbv', 'gghghg'];
  public drugInteractions: IdrugInteraction[] = [];
  constructor(private drugInteractionService: DrugInteractionService) { }

  ngOnInit() {
  }
  addList() {
    this.drugList = true;
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
  }

  deleteItem(item) {
    this.drugArray.splice(item);
  }
  drugInteraction() {
    this.drugInteractions = this.drugInteractionService.checkInteraction(this.drugArray);
  }
}
