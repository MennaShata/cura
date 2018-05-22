import { IfoodInteraction } from './../../../shared/models/interfaces/ifoodInteraction';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-Food-Interaction-Item',
  templateUrl: './Food-Interaction-Item.component.html',
  styleUrls: ['./Food-Interaction-Item.component.css']
})
export class FoodInteractionItemComponent implements OnInit {

  @Input() foodInteraction:IfoodInteraction;
  constructor() { }

  ngOnInit() {
  }

}
