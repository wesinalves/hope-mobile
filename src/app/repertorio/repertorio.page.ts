import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.page.html',
  styleUrls: ['./repertorio.page.scss'],
})
export class RepertorioPage implements OnInit {

  data: any;
  nonfiltredData: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  	this.newsService.getData('everything?q=bitcoin&from=2018-12-23&sortBy=publishedAt')
  		.subscribe(data => {
  			console.log(data);
        this.data = data
        this.nonfiltredData = data
  		})

  }

  getRepertorio(article){
    this.newsService.currentArticle = article
    this.router.navigate(['/resp-repertorio'])
  }

  getFiltredRepertorio(ev: any){ 
    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.data.articles = this.nonfiltredData.articles.filter((article) => {
        return (article.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

}
