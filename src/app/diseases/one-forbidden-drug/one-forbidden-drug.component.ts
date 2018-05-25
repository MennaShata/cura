import { Component, OnInit, Input } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';

@Component({
  selector: 'app-one-forbidden-drug',
  templateUrl: './one-forbidden-drug.component.html',
  styleUrls: ['./one-forbidden-drug.component.css']
})
export class OneForbiddenDrugComponent implements OnInit {
@Input() fDrug:IDrugDisease;
  constructor() { }

  ngOnInit() {
  }

}
