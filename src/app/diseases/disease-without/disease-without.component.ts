import { Component, OnInit, Input } from '@angular/core';
import { Idisease } from '../../shared/models/interfaces/idisease';

@Component({
  selector: 'app-disease-without',
  templateUrl: './disease-without.component.html',
  styleUrls: ['./disease-without.component.css']
})
export class DiseaseWithoutComponent implements OnInit {
  @Input() disease:Idisease;
  constructor() { }

  ngOnInit() {
  }

}
