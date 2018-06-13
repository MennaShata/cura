import { Injectable } from '@angular/core';
import { IstrengthUnit } from '../../models/interfaces/Istrength-unit';

@Injectable({
  providedIn: 'root'
})
export class StrengthService {
  private strength: IstrengthUnit[]
  constructor() {
    this.strength = [
      { id: 1, name: 'gram' },
      { id: 2, name: 'mg' },
      { id: 3, name: 'ml' }]
  };

  public strengthUnit: IstrengthUnit;
  public getAll(): IstrengthUnit[] {
    return this.strength;
  }
  public getName(id: number): string {
    const index = this.strength.findIndex(a => a.id == id);
    if (index > -1) {
      return this.strength[index].name;
    }
  }
  getById(id) {
    const index = this.strength.findIndex((a) => a.id === id);
    console.log(index);
    if (index > -1) {
      return this.strength[index];
    }
    return null;
  }
}
