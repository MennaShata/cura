import { Component, OnInit } from '@angular/core';
import { Isideeffect } from '../../shared/models/interfaces/Isideeffect';

@Component({
  selector: 'app-side-effect-listing',
  templateUrl: './side-effect-listing.component.html',
  styleUrls: ['./side-effect-listing.component.css']
})
export class SideEffectListingComponent implements OnInit {

  public sideeffects: Isideeffect[];
  constructor() { 
    this.sideeffects =[
      {
        name : "soda3",
        description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
        icon:"fa fa-user"

    },
    {
      name : "soda3 nsfi",
      description:"haza el dwa bigeb soda3 lma yta5d m3 el lban",
      icon:"fa fa-user"

  }
  ];
  }

  ngOnInit() {
  }

}
