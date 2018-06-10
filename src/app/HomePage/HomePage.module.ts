import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './HomePage.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { ServiceSmallItemComponent } from './service-small-item/service-small-item.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { DoctorSliderComponent } from './doctorSlider/doctorSlider.component';
import { DoctorSmallItemComponent } from './doctor-small-item/doctor-small-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomePageComponent,
    IndexComponent,
    SliderComponent,
    ServiceSmallItemComponent,
    ServiceListingComponent,
    DoctorSliderComponent,
    DoctorSmallItemComponent
]
})
export class HomePageModule { }
