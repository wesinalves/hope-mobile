import { Component, OnInit } from '@angular/core';
import { NewsService} from '../news.service';

@Component({
  selector: 'app-resp-repertorio',
  templateUrl: './resp-repertorio.page.html',
  styleUrls: ['./resp-repertorio.page.scss'],
})
export class RespRepertorioPage implements OnInit {
  
  article;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.article = this.newsService.currentArticle 
  	console.log(this.newsService.currentArticle);
  }

}
