import { Component, OnInit, Input } from '@angular/core';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';

@Component({
  selector: 'app-side-effect-item',
  templateUrl: './side-effect-item.component.html',
  styleUrls: ['./side-effect-item.component.css']
})
export class SideEffectItemComponent implements OnInit {

 @Input() public sideeffect :Isideeffect;

  constructor() {
   }

  ngOnInit() {
  }

}
