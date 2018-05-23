import { IfoodInteraction } from './../../../shared/models/interfaces/ifoodInteraction';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-Food-Interaction-Item',
  templateUrl: './Food-Interaction-Item.component.html',
  styleUrls: ['./Food-Interaction-Item.component.css']
})
export class FoodInteractionItemComponent implements OnInit {

  @Input() foodInteraction:IfoodInteraction;
  constructor(private router: Router) { }
  btnClick= function () {
    this.router.navigate(['/interactions/foodinteraction/page/', this.foodInteraction.id]);
};

  ngOnInit() {
  }

}
