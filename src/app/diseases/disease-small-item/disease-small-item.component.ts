import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';
@Component({
  selector: 'app-disease-small-item',
  templateUrl: './disease-small-item.component.html',
  styleUrls: ['./disease-small-item.component.css']
})
export class DiseaseSmallItemComponent implements OnInit {
  @Input() disease:Idisease;

  constructor() { }

  ngOnInit() {
  }

}
