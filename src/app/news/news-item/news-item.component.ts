import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news/news.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Input } from '@angular/core';
import { Inews } from '../../shared/models/interfaces/inews';
import { NewsEditComponent } from '../news-edit/news-edit.component';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  bsModalRef: BsModalRef;
  @Input() oneNews: Inews;
  public content : string;

  constructor(private newsService: NewsService, private modalService: BsModalService) { }


  deleteNews(id: number) {
    console.log("ana gwa al delete news ts");
    this.newsService.delete(id);
  }

  public TrimMaxLength(str, maxLength) {
    var res = str;
    if (str.length > maxLength) {
      res = str.substr(0, maxLength);
      res = res.concat("....");
    }

    return res;
  }

  ngOnInit() {
    this.content = this.TrimMaxLength(this.oneNews.content, 100);
  }

  public openModalWithComponent(_id: number) {
    const initialState =
      {
        id: _id
      }
    this.bsModalRef = this.modalService.show(NewsEditComponent, { initialState });
  }

}
