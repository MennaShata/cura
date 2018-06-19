import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideEffectListingComponent } from './side-effect-listing/side-effect-listing.component';
import { SideEffectAddComponent } from './side-effect-add/side-effect-add.component';
import { SideEffectItemComponent } from './side-effect-item/side-effect-item.component';
import { SideEffectsComponent } from './side-effects.component';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SideEffectEditComponent } from './side-effect-edit/side-effect-edit.component';
import { SideEffectWithoutComponent } from './side-effect-without/side-effect-without.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
   RouterModule

  ],
  declarations: [
    SideEffectListingComponent,
    SideEffectAddComponent,
    SideEffectItemComponent,
    SideEffectsComponent,
    SideEffectEditComponent,
    SideEffectWithoutComponent
   
,
    SideEffectEditComponent
,
    SideEffectWithoutComponent
],
exports : [
  SideEffectItemComponent,
  SideEffectWithoutComponent

]
})
export class SideEffectModule { }
