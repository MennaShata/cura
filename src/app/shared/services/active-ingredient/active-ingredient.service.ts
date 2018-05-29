import { Injectable } from '@angular/core';
import { Iactiveingredient } from 'src/app/shared/models/interfaces/iactiveingredient';
import { fail } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ActiveIngredientService {

  activeIngredients: Iactiveingredient[] =
    [
      { id: 1, name: "para", description: "ay kalam" },
      { id: 2, name: "paracetamol", description: "ay kalam" },
      { id: 3, name: "para3", description: "ay kalam" }
    ];
  activeing: Iactiveingredient;
  constructor() { }

  getAll() {
    return this.activeIngredients;
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
}
