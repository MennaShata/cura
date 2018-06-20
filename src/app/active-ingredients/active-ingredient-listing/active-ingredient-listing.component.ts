import { Component, OnInit } from '@angular/core';
import { ActiveIngredientService } from 'src/app/shared/services/active-ingredient/active-ingredient.service';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';

@Component({
  selector: 'app-active-ingredient-listing',
  templateUrl: './active-ingredient-listing.component.html',
  styleUrls: ['./active-ingredient-listing.component.css']
})
export class ActiveIngredientListingComponent implements OnInit {

  public txtSearch:string='';
  public aisName:string[];

  ais:Iactiveingredient[]=[];
  constructor(private ActiveIngredientService:ActiveIngredientService) { }

  ngOnInit() {
    this.ActiveIngredientService.getAll().subscribe(
      (data)=>{this.ais=data}
    )
    this.aisName = this.ActiveIngredientService.getAllNames();
  }

  search(){
    this.ais = this.ActiveIngredientService.search(this.txtSearch);
  }

}
