import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule }   from '@angular/forms';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { FoodPipe } from './pipes/food.pipe';
import { DrugPipe } from './pipes/drug.pipe';
import { ListingCarouselComponent } from 'src/app/shared/components/listing-carousel/listing-carousel.component';
import { CarouselSmallItemComponent } from 'src/app/shared/components/carousel-small-item/carousel-small-item.component';
import { HeaderTopComponent } from 'src/app/shared/components/header-top/header-top.component';
import { FoodInteractionCarouselListingComponent } from 'src/app/shared/components/food-interaction-carousel-listing/food-interaction-carousel-listing.component';
import { FoodInteractionCarouselComponent } from 'src/app/shared/components/food-interaction-carousel/food-interaction-carousel.component';

@NgModule({
  imports: [CommonModule, [FormsModule]],
  declarations: [
    SharedComponent,
    SearchComponent, 
    FilterComponent, 
    FoodPipe,
    DrugPipe,
    LatestNewsComponent,
    ListingCarouselComponent,
    CarouselSmallItemComponent,
    HeaderTopComponent,
    FoodInteractionCarouselListingComponent,
    FoodInteractionCarouselComponent
  ],
  exports: [
    SearchComponent, 
    FilterComponent, 
    FoodPipe,
    DrugPipe,
    LatestNewsComponent,
    ListingCarouselComponent,
    FoodInteractionCarouselListingComponent,
    HeaderTopComponent]
})




export class SharedModule {}
