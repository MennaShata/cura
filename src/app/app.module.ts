import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PillListingComponent } from './pill/pill-listing/pill-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PillListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
