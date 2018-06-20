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
  desc:string;
  constructor(private ActiveIngredientService:ActiveIngredientService) { }

  ngOnInit() {
    this.desc = this.TrimMaxLength(this.ai.description,100);
  }

  deleteAI(id:number){
    this.ActiveIngredientService.Delete(id);
    
  }
  public TrimMaxLength(str, maxLength) {
    var res = str;
    if (str.length > maxLength) {
        res = str.substr(0, maxLength);
        res = res.concat("...");
    }
    return res;
}

}
