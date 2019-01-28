import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  data: any;
 
  constructor(private newsService: NewsService) { }

  ngOnInit() {
	this.newsService.getData('everything?q=bitcoin&from=2018-12-28&sortBy=publishedAt')
		.subscribe(data => {
			console.log(data);
      this.data = data
		})
  }

}
