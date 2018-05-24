import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    [FormsModule]
  ],
  declarations: [SharedComponent,
    SearchComponent,
    FilterComponent
]
})
export class SharedModule { }
