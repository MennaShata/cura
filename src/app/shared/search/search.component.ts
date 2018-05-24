import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {DrugServiceService} from './../../shared/services/drug-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
// @Output() searchClicked:EventEmitter<string>= new EventEmitter<string>();
 public drug:string;
  constructor(private c:DrugServiceService) { }

  ngOnInit() {
    
  }
  // onSubmit(f: NgForm) {
  //   debugger;
  //   this.c.drugSearch(this.drug);
  // }
  // onChange(){
  //   debugger;
  //  this.searchClicked.emit(this.drug);
  // }
  onChange(){
    debugger;
    this.c.drugSearch(this.drug);
    //this.c.getAllDrug();
  
  }
}
