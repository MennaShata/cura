import { Component, OnInit } from '@angular/core';
import { ActiveIngredientService } from 'src/app/shared/services/active-ingredient/active-ingredient.service';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';

@Component({
  selector: 'app-active-ingredient-listing',
  templateUrl: './active-ingredient-listing.component.html',
  styleUrls: ['./active-ingredient-listing.component.css']
})
export class ActiveIngredientListingComponent implements OnInit {

  ais:Iactiveingredient[];
  constructor(private ActiveIngredientService:ActiveIngredientService) { }

  ngOnInit() {
    this.ais = this.ActiveIngredientService.getAll();
  }

}
