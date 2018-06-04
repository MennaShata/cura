import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../shared/models/interfaces/ipost';
import { PostServiceService } from '../../shared/services/post-service.service';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.css']
})
export class PostListingComponent implements OnInit {
  posts:Ipost[];
  constructor(private PostServiceService:PostServiceService) { }

  ngOnInit() {
    this.posts=this.PostServiceService.getAll();
  }

}
