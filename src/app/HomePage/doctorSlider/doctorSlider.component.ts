import { Component, OnInit } from '@angular/core';
import { Idoctor } from '../../shared/models/interfaces/Idoctor';
import {DoctorService} from '../../shared/services/doctor/doctor.service'

@Component({
  selector: 'app-doctorSlider',
  templateUrl: './doctorSlider.component.html',
  styleUrls: ['./doctorSlider.component.css']
})
export class DoctorSliderComponent implements OnInit {
public doctorArray:Idoctor[]=[];
  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorArray= this.doctorService.getAllDoctors();
  }

}
