import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { Inews } from '../../shared/models/interfaces/inews';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  formtitle = '';
  editForm: FormGroup;
  oneNews: Inews;
  @Input() id: number;

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute, private route: Router, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    if (this.id == undefined) {
      this.activatedRoute.params.subscribe((params) => { this.id = params['id']; });
    }
    this.formtitle = 'Edit News';
    this.oneNews = this.newsService.getById(this.id);

    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      publisher: new FormControl(),
      source: new FormControl(),
      date: new FormControl(),
      newsImage: new FormControl('', Validators.required)
    });


    this.editForm.patchValue(
      {
        id: this.id,
        title: this.oneNews.title,
        content: this.oneNews.content,
        publisher: this.oneNews.publisher,
        source: this.oneNews.source,
        date: this.oneNews.date,
        newsImage: this.oneNews.image
      }
    );
  }

  whenCanceled() {
    this.bsModalRef.hide();
  }

  updateNews() {
    console.log("ana  gwa al ts update");
    debugger;
    if (this.editForm.valid) {
      debugger;
      console.log("ana  gwa al for update");
      this.oneNews = {
        id: this.id,
        title: this.editForm.get('title').value,
        content: this.editForm.get('content').value,
        publisher: this.editForm.get('publisher').value,
        source: this.editForm.get('source').value,
        date: this.editForm.get('date').value,
        image: this.editForm.get('newsImage').value
      }
      this.newsService.Update(this.oneNews);
      this.bsModalRef.hide();
    }
  }

}
