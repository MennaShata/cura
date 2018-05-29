import { Component, OnInit, Input } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { ActiveIngredientService } from 'src/app/shared/services/active-ingredient/active-ingredient.service';

@Component({
  selector: 'app-active-ingrediant-item',
  templateUrl: './active-ingrediant-item.component.html',
  styleUrls: ['./active-ingrediant-item.component.css']
})
export class ActiveIngrediantItemComponent implements OnInit {

  @Input() ai:Iactiveingredient;
  constructor(private ActiveIngredientService:ActiveIngredientService) { }

  ngOnInit() {
  }

  deleteAI(id:number){
    this.ActiveIngredientService.Delete(id);
    
  }

}
