import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideEffectListingComponent } from './side-effect-listing/side-effect-listing.component';
import { SideEffectAddComponent } from './side-effect-add/side-effect-add.component';
import { SideEffectItemComponent } from './side-effect-item/side-effect-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [,
    SideEffectListingComponent,
    SideEffectAddComponent,
    SideEffectItemComponent
]
})
export class SideEffectModule { }
