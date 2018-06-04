import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule }   from '@angular/forms';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';


@NgModule({
  imports: [
    CommonModule,
    [FormsModule]
  ],
  declarations: [SharedComponent,
    SearchComponent,
    FilterComponent,
    LatestNewsComponent
],
exports:[
  SearchComponent,
  FilterComponent,
  LatestNewsComponent
]
})
export class SharedModule { }
