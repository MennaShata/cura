import { Component, OnInit, Input } from '@angular/core';
import { IDrugDisease } from '../../shared/models/interfaces/IDrugDisease';

@Component({
  selector: 'app-one-treated-drug',
  templateUrl: './one-treated-drug.component.html',
  styleUrls: ['./one-treated-drug.component.css']
})
export class OneTreatedDrugComponent implements OnInit {
  @Input() tDrug:IDrugDisease;
  constructor() { }

  ngOnInit() {
  }

}
