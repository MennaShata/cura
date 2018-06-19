import { Injectable } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { fail } from 'assert';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveIngredientService {

  activeIngredients: Iactiveingredient[] =
    [
    { id: 0, name: 'paracetamol' , description :"is a medicine used to treat pain and fever. It is typically used for mild to moderate pain relief",drugs:[1,2],foodinteractions:[0,1] },
    { id: 1, name: 'dextromethorphan',description:" is a drug of the morphinan class with sedative, dissociative, and stimulant properties (at higher doses).",drugs:[2,0,2,0,2],foodinteractions:[0,1,0,1,0,1],diseases:[0,1] },
    { id: 2, name: 'acetylsalicylic acid' },
    { id: 3, name: 'Acetaminophen' },
    { id: 4, name: 'Dextromethorphan' },
    { id: 5, name: 'Diphenhydramine' }
  ];
  activeing: Iactiveingredient;

  constructor() { }

  getAll():Observable<Iactiveingredient[]>  {
    return of(this.activeIngredients);
  }

  getById(id) {
    for (let i = 0; i < this.activeIngredients.length; i++) {
      if (this.activeIngredients[i].id == id) {
        this.activeing = this.activeIngredients[i];
      }
    }
    return this.activeing;
  }

  Delete(id) {
    let index = this.activeIngredients.findIndex(a => a.id === id);
    if (index > -1) {
      this.activeIngredients.splice(index, 1);
    }

  }

  Add(activeIngredientitem) {
    this.activeIngredients.push(activeIngredientitem)
  }

  update(activeIngredient: Iactiveingredient) {
  
    const oldactiveing = this.getById(activeIngredient.id);
    oldactiveing.name = activeIngredient.name;
    oldactiveing.description = activeIngredient.description;
    oldactiveing.drugs = activeIngredient.drugs;
  }
  public getName(id: number): string {
    const index = this.activeIngredients.findIndex(a => a.id === id);
    if (index > -1) {
      return this.activeIngredients[index].name;
    }
  }
}
