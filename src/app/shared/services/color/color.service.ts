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
      { id: 1, name: 'White' },
      { id: 2, name: 'Orange' },
      { id: 3, name: 'Yellow' },
      { id: 4, name: 'Gray' },
      { id: 5, name: 'Green' },
      { id: 6, name: 'Tan' },
      { id: 7, name: 'Brown' },
      { id: 8, name: 'Red' },
      { id: 9, name: 'Pink' },
      { id: 10, name: 'Peach' },
      { id: 11, name: 'Gold' },
      { id: 12, name: 'Blue' },
      { id: 13, name: 'Purple' },
      { id: 14, name: 'Lavander' },
      { id: 15, name: 'Multi Color' },
      { id: 16, name: 'Off White' }];
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
