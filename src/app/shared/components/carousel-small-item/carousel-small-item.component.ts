import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Idrug } from 'src/app/shared/models/interfaces/Idrug';
import { DrugTypeService } from 'src/app/shared/services/drug-type/drug-type.service';

@Component({
  selector: 'app-carousel-small-item',
  templateUrl: './carousel-small-item.component.html',
  styleUrls: ['./carousel-small-item.component.css']
})
export class CarouselSmallItemComponent implements OnInit {
 @Input() drug:Idrug;
 drugType:string;
  constructor(private dts:DrugTypeService) { }

  ngOnInit() {
    this.drugType = this.dts.getName(this.drug.id);
  }

}
