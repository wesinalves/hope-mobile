import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crenca',
  templateUrl: './crenca.page.html',
  styleUrls: ['./crenca.page.scss'],
})
export class CrencaPage implements OnInit {
  data: any
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  	this.newsService.getData('everything?q=bitcoin&from=2018-12-30&sortBy=publishedAt')
		.subscribe(data => {
			console.log(data);
      this.data = data
		})
  }

  onGoToCrenca(article){
    this.newsService.currentArticle = article
    this.router.navigate(['/resp-crenca'])
  }

}
