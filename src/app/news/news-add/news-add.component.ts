import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NewsService } from '../../shared/services/news/news.service';
import { BsModalRef } from 'ngx-bootstrap';
import { Inews } from '../../shared/models/interfaces/inews';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {
  isTRequired = false;
  isCRequired = false;
  isIRequired = false;
  formtitle = '';
  oneNews: Inews;
  addForm: FormGroup;
  ntitle  : any;
  ncontent  : any;
  nimage : any;

  constructor(private newsService: NewsService, public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.formtitle = 'Add News';

    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      publisher: new FormControl(),
      source: new FormControl(),
      date: new FormControl(),
      newsImage: new FormControl('', Validators.required)
    });

  }

  whenCanceled() {
    this.bsModalRef.hide();
  }

  addNews() {
    if (this.addForm.valid) {
      this.oneNews = {
        id: Math.random(),
        title: this.addForm.get('title').value,
        content: this.addForm.get('content').value,
        publisher: this.addForm.get('publisher').value,
        source: this.addForm.get('source').value,
        date: this.addForm.get('date').value,
        image: this.addForm.get('newsImage').value
      }
      this.newsService.add(this.oneNews);
      this.bsModalRef.hide();
    }
    else{
      this.onRequired();
    }
  }
  
  onRequired() {
console.log("ana gwa al req y bnty");
debugger;
    this.ntitle = this.addForm.get('title');
    this.ncontent = this.addForm.get('content');
    this.nimage = this.addForm.get('newsImage');

    if (this.ntitle.invalid) {
      this.isTRequired = true;
    }
    else{
      this.isTRequired = false;
    }

    if(this.ncontent.invalid){
      this.isCRequired = true;
    }
    else{
      this.isCRequired = false;
    }

    if(this.nimage.invalid){
      this.isIRequired = true;
    }
    else{
      this.isIRequired = false;
    }

  }
}
