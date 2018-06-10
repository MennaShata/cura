import { Component, OnInit ,Input} from '@angular/core';
import {Islider} from '../../shared/models/interfaces/Islider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
@Input() public sliderData:Islider[];
  constructor() { }

  ngOnInit() {
  }

}
