import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiseaseSmallItemComponent } from './diseases/disease-small-item/disease-small-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DiseaseSmallItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
