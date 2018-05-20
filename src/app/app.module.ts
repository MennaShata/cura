import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PillListingComponent } from './pill/pill-listing/pill-listing.component';


import {RouterModule,Routes} from '@angular/router';
import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';
const routes: Routes = [
  { path: '',component:AppComponent },
  { path: 'drug/listing', component: DrugsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    PillListingComponent
  ],
  imports: [
    BrowserModule,
    DrugsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
