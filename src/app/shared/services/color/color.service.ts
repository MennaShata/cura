import { Injectable } from '@angular/core';
import { Icolor } from '../../models/interfaces/Icolor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colors: Icolor[];
  private color: Icolor;

  constructor() {
    this.colors = [
      { id: 0, name: 'White' },
      { id: 1, name: 'Orange' },
      { id: 2, name: 'Yellow' },
      { id: 3, name: 'Gray' },
      { id: 4, name: 'Green' },
      { id: 5, name: 'Tan' },
      { id: 6, name: 'Brown' },
      { id: 7, name: 'Red' },
      { id: 8, name: 'Pink' },
      { id: 9, name: 'Peach' },
      { id: 10, name: 'Gold' },
      { id: 11, name: 'Blue' },
      { id: 12, name: 'Purple' },
      { id: 13, name: 'Lavander' },
      { id: 14, name: 'Multi Color' },
      { id: 15, name: 'Off White' }];
  }
  public getAll(): Icolor[] {
    return this.colors
  }
  public getName(id: number): string {
    const index = this.colors.findIndex(a => a.id == id);
    if (index > -1) {
      return this.colors[index].name;
    }
  }

  getById(id) {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i].id == id) {
        this.color = this.colors[i];
      }
    }
    return this.color;
  }

}
