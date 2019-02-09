import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {
  
  low: number;
  high: number;
  rand: number;

  constructor() { }

  ngOnInit() {
  }

  startSort(){
  	console.log(this.low)
  	console.log(this.high)
  	this.rand = Math.floor(Math.random() * this.high) + this.low;
  	console.log('sorteio >>>>> ' + this.rand.toString());
  }

}
