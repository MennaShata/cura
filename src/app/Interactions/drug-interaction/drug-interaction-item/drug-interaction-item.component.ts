import { Component, OnInit , Input } from '@angular/core';
import { IdrugInteraction } from '../../../shared/models/interfaces/IdrugInteraction';

@Component({
  selector: 'app-drug-interaction-item',
  templateUrl: './drug-interaction-item.component.html',
  styleUrls: ['./drug-interaction-item.component.css']
})
export class DrugInteractionItemComponent implements OnInit {
@Input() public drugInteract:IdrugInteraction;
  constructor() { }

  ngOnInit() {
  }

}
