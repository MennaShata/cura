import { Component, OnInit } from '@angular/core';
import { Ipill } from '../../shared/models/interfaces/ipill';
import { Input } from '@angular/core';
import { PillService } from '../../shared/services/pill/Pill.service';

@Component({
  selector: 'app-pill-item',
  templateUrl: './pill-item.component.html',
  styleUrls: ['./pill-item.component.css']
})
export class PillItemComponent implements OnInit {
  @Input() pill : Ipill;
  constructor(private pillservice : PillService) { }

  deletePill(id:number){
    this.pillservice.Delete(id);
  }

  ngOnInit() {
  }

}
