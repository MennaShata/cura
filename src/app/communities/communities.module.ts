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
import { CommunityAddComponent } from './community-add/community-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommunityEditComponent } from './community-edit/community-edit.component';
import { RouterModule, Routes ,ActivatedRoute} from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    [ReactiveFormsModule],
    FormsModule,
    RouterModule.forChild([
      {path:'community',children:[
        { path: 'component', component: CommunitiesComponent },
        { path:'details/:id' , component :CommunityDetailsComponent},
        { path:'listing' , component:CommunityListingComponent},
        { path:'edit/:id' , component:CommunityEditComponent},
        { path:'add' , component:CommunityAddComponent},
        { path:'postDeatils' , component:PostDetailsComponent},
      ]},
      { path:'postListing' , component :PostListingComponent},
    ])
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
    CommunityAddComponent,
    CommunityEditComponent,
    PostDetailsComponent
],
exports :[
  //PostDetailsComponent
]
})
export class CommunitiesModule { }
