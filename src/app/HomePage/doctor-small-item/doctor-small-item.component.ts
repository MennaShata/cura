import { Component, OnInit ,Input} from '@angular/core';
import {Idoctor} from '../../shared/models/interfaces/Idoctor';

@Component({
  selector: 'app-doctor-small-item',
  templateUrl: './doctor-small-item.component.html',
  styleUrls: ['./doctor-small-item.component.css']
})
export class DoctorSmallItemComponent implements OnInit {
@Input() public doctorData:Idoctor;
  constructor() { }

  ngOnInit() {
  }

}
