import { Component, OnInit } from '@angular/core';
import {CarouselSmallItemComponent} from './../carousel-small-item/carousel-small-item.component'
import { Input } from '@angular/core';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';
@Component({
  selector: 'app-listing-carousel',
  templateUrl: './listing-carousel.component.html',
  styleUrls: ['./listing-carousel.component.css']
})
export class ListingCarouselComponent implements OnInit {
  @Input() drugs:Idrug[];
  constructor() { }

  ngOnInit() {
  }

}
