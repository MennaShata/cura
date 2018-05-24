import { ActivatedRoute } from '@angular/router';
import { FoodInteractionService } from './../../../shared/services/foodInteraction.service';
import { IfoodInteraction } from './../../../shared/models/interfaces/ifoodInteraction';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Single-Food-Interaction',
  templateUrl: './Single-Food-Interaction.component.html',
  styleUrls: ['./Single-Food-Interaction.component.css']
})
export class SingleFoodInteractionComponent implements OnInit {

  constructor(private FoodInteractionService: FoodInteractionService, private activeRoute: ActivatedRoute) { }
  @Input() foodInteraction:IfoodInteraction;
  id: number;

  ngOnInit() {
    // this.foodInteraction = this.FoodInteractionService.getById(1);
    this.activeRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.foodInteraction = this.FoodInteractionService.getById(this.id);
  }

}
