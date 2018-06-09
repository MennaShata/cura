import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';

@Component({
  selector: 'app-carousel-small-item',
  templateUrl: './carousel-small-item.component.html',
  styleUrls: ['./carousel-small-item.component.css']
})
export class CarouselSmallItemComponent implements OnInit {
 @Input() drug:Idrug
  constructor() { }

  ngOnInit() {
  }

}
