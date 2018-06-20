import { Component, OnInit, Input } from '@angular/core';
import { Iactiveingredient } from '../../shared/models/interfaces/iactiveingredient';

@Component({
  selector: 'app-ActiveIngrediant-without',
  templateUrl: './ActiveIngrediant-without.component.html',
  styleUrls: ['./ActiveIngrediant-without.component.css']
})
export class ActiveIngrediantWithoutComponent implements OnInit {
  @Input() ai:Iactiveingredient;

  constructor() { }

  ngOnInit() {
  }

}
