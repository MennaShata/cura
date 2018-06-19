import { Component, OnInit, Input } from '@angular/core';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';

@Component({
  selector: 'app-side-effect-without',
  templateUrl: './side-effect-without.component.html',
  styleUrls: ['./side-effect-without.component.css']
})
export class SideEffectWithoutComponent implements OnInit {
  @Input() public sideeffect :Isideeffect;
  constructor() { }

  ngOnInit() {
  }

}
