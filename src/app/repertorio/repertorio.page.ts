import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.page.html',
  styleUrls: ['./repertorio.page.scss'],
})
export class RepertorioPage implements OnInit {

  data: any;
  filtredData: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  	this.newsService.getData('everything?q=bitcoin&from=2018-12-28&sortBy=publishedAt')
  		.subscribe(data => {
        this.data = _.clone(data)
        this.filtredData = data
  		})

  }

  getRepertorio(article){
    this.newsService.currentArticle = article
    this.router.navigate(['/resp-repertorio'])
  }

  getFiltredRepertorio(ev: any){

    console.log(this.data)
    console.log(this.filtredData)

    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.filtredData.articles = this.data.articles.filter((a) => {
        return (a.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

  getCleared(){
    this.filtredData = _.clone(this.data)
  }

}
