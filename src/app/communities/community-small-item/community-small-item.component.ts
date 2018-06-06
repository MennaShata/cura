import { Component, OnInit, Input } from '@angular/core';
import { Icommunity } from '../../shared/models/interfaces/icommunity';
import { CommunityServiceService } from '../../shared/services/community-service.service';

@Component({
  selector: 'app-community-small-item',
  templateUrl: './community-small-item.component.html',
  styleUrls: ['./community-small-item.component.css']
})
export class CommunitySmallItemComponent implements OnInit {
@Input() community :Icommunity;
  constructor(private CommunityServiceService:CommunityServiceService) { }

  ngOnInit() {
  }
  delete(id:number){
    this.CommunityServiceService.delete(id);
  }

}
