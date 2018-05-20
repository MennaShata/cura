import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-disease-component',
  templateUrl: './disease-component.component.html',
  styleUrls: ['./disease-component.component.css']
})
export class DiseaseComponentComponent implements OnInit {
 
  constructor() { }
item :string='clear';
  ngOnInit() {
  }

  public OnMenuChanged(){

  }
}
