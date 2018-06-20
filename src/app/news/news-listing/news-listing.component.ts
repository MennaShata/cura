import { Component, OnInit , OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Inews } from '../../shared/models/interfaces/inews';
import { NewsService } from '../../shared/services/news/news.service';
import { NewsAddComponent } from '../news-add/news-add.component';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {
  bsModalRef: BsModalRef
  public news: Inews[];
  public txtSearch:string='';
  
  constructor(private newsService: NewsService , private router: Router,private modalService: BsModalService) { }

  ngOnInit() {
    this.newsService.getNewsList().subscribe(res => {this.news = res} );
  
  }
  search(){
    this.news = this.newsService.newsSearch(this.txtSearch);

  }

  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(NewsAddComponent, Object.assign({},{ class:'modal-lg'}));
  }

}
