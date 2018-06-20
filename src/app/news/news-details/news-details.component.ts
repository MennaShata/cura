import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../shared/services/news/news.service';
import { Inews } from '../../shared/models/interfaces/inews';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id:number;
  public oneNews:Inews;
  public day : number;
  public month :string;
  public mo  : string;

  constructor(private newsService: NewsService , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{this.id=params['id'];});
    this.oneNews = this.newsService.getById(this.id);
    this.day =  this.TrimMaxLength(this.oneNews.date, 2 ,  8 ); 
    this.mo =  this.TrimMaxLength(this.oneNews.date, 2 , 5); 
    this.month =  this.getMonth(this.mo);
    console.log("anaaaaaaaaaaaaaaaaa");
    console.log(this.mo);
  }

  public TrimMaxLength(str, maxLength  ,start) {
    var res = str;
    if (str.length > maxLength) {
      res = str.substr(start, maxLength);
    }

    return res;
  }

  public getMonth(mon : string)
  {
    var res = "";

    switch(mon){
    case "01":{
      res = "jan";
      break;
    }
    case "02":{
      res = "FEB";
      break;
    }
    case "03":{
      res = "MAR";
      break;
    }
    case "04":{
      res = "APR";
      break;
    }
    case "05":{
      res = "MAY";
      break;
    }
    case "06":{
      res = "JUN";
      break;
    }
    case "07":{
      res = "JUL";
      break;
    }
    case "08":{
      res = "AUG";
      break;
    }
    case "09":{
      res = "SEP";
      break;
    }
    case "10":{
      res = "OCT";
      break;
    }
    case "11":{
      res = "NOV";
      break;
    }
    case "12":{
      res = "DEC";
      break;
    }
    
  }
    return res;
  }

}
