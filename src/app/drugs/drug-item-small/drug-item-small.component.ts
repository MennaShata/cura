import { Component, OnInit , Input} from '@angular/core';
import {Idrug} from './../../shared/models/interfaces/Idrug';

@Component({
  selector: 'app-drug-item-small',
  templateUrl: './drug-item-small.component.html',
  styleUrls: ['./drug-item-small.component.css']
})
export class DrugItemSmallComponent implements OnInit {
 @Input() public drugs:Idrug;
  constructor( ) { }

  ngOnInit() {
  }

}
