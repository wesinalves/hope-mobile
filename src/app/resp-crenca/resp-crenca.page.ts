import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';

@Component({
  selector: 'app-resp-crenca',
  templateUrl: './resp-crenca.page.html',
  styleUrls: ['./resp-crenca.page.scss'],
})
export class RespCrencaPage implements OnInit {
  article;	
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.article = this.newsService.currentArticle 
  	console.log(this.newsService.currentArticle);
  }

}
