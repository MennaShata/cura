import { FoodItemComponent } from './food/food-item/food-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';

import {DrugsModule} from './drugs/drugs.module';
import {DrugsComponent} from './drugs/drugs.component';

import { PillModule } from './pill/pill.module';
import {PillComponent} from './pill/pill.component';

const routes: Routes = [
  { path: '',component:AppComponent },
  { path: 'drug/listing', component: DrugsComponent},
  { path: 'pill/item', component: PillComponent},
  { path: 'food', component: FoodItemComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    DrugsModule,
    PillModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
