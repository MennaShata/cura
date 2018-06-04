import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesComponent } from './communities.component';
import { CommunitySmallItemComponent } from './community-small-item/community-small-item.component';
import { CommunityListingComponent } from './community-listing/community-listing.component';
import { SharedModule } from '../shared/shared.module';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { PostSmallItemComponent } from './post-small-item/post-small-item.component';
import { PostListingComponent } from './post-listing/post-listing.component';
import { CommunityDetailsComponent } from './community-details/community-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommunitiesComponent,
    CommunitySmallItemComponent,
    CommunityListingComponent,
    AsideLeftComponent,
    PostSmallItemComponent,
    PostListingComponent,
    CommunitySmallItemComponent,
    CommunityListingComponent,
    CommunityDetailsComponent,
    
]
})
export class CommunitiesModule { }
