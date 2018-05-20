import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../data/interfaces/idisease';

@Component({
  selector: 'app-disease-component',
  templateUrl: './disease-component.component.html',
  styleUrls: ['./disease-component.component.css']
})
export class DiseaseComponentComponent implements OnInit {
  @Input() disease:Idisease;
  constructor() { }
item :string='clear';
  ngOnInit() {
  }

  public OnMenuChanged(){

  }
}
