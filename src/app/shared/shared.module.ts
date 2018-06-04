import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule }   from '@angular/forms';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { FoodPipe } from './pipes/food.pipe';
import { DrugPipe } from './pipes/drug.pipe';

@NgModule({
  imports: [CommonModule, [FormsModule]],
  declarations: [SharedComponent, SearchComponent, FilterComponent, FoodPipe,DrugPipe,LatestNewsComponent],
  exports: [SearchComponent, FilterComponent, FoodPipe,DrugPipe,LatestNewsComponent]
})




export class SharedModule {}
