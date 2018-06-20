import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListingComponent } from './news-listing/news-listing.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RouterModule } from '@angular/router';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    [FormsModule],
    [ReactiveFormsModule]
  ],
  declarations: [NewsComponent,
    NewsItemComponent,
    NewsListingComponent,
    NewsDetailsComponent,
    NewsEditComponent,
    NewsAddComponent
]
})
export class NewsModule { }
