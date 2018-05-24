import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideEffectListingComponent } from './side-effect-listing/side-effect-listing.component';
import { SideEffectAddComponent } from './side-effect-add/side-effect-add.component';
import { SideEffectItemComponent } from './side-effect-item/side-effect-item.component';
import { SideEffectsComponent } from './side-effects.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SideEffectListingComponent,
    SideEffectAddComponent,
    SideEffectItemComponent,
    SideEffectsComponent,
    
   
]
})
export class SideEffectModule { }
