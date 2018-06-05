import { Component, OnInit, Input } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';

@Component({
  selector: 'app-community-small-item',
  templateUrl: './community-small-item.component.html',
  styleUrls: ['./community-small-item.component.css']
})
export class CommunitySmallItemComponent implements OnInit {
@Input() community :Icommunity;
  constructor() { }

  ngOnInit() {
  }

}
