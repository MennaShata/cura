import { Component, OnInit, Input } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';

@Component({
  selector: 'app-active-ingrediant-item',
  templateUrl: './active-ingrediant-item.component.html',
  styleUrls: ['./active-ingrediant-item.component.css']
})
export class ActiveIngrediantItemComponent implements OnInit {

  @Input() ai:Iactiveingredient;
  constructor() { }

  ngOnInit() {
  }

}
