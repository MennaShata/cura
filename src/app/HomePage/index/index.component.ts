import { Component, OnInit } from '@angular/core';
import {SliderService} from './../../shared/services/slider/slider.service';
import {Islider} from './../../shared/models/interfaces/Islider';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
 public sliderArray:Islider[]=[];
  constructor(private sliderService:SliderService) { }

  ngOnInit() {
    this.sliderArray = this.sliderService.getAll();
  }

}
