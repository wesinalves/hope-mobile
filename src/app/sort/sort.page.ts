import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {
  
  public low: any;
  public high: any;
  public rand: number;
  public lastRand: number;
  public numbers: string[];


  constructor() { }

  ngOnInit() {
    this.resetSort()
  }

  startSort(){
  	this.lastRand = Math.floor(Math.random() * this.high) + this.low;
    if(this.numbers.length == this.high)
      return;
    if(this.numbers.indexOf(this.lastRand.toString()) == -1){
      this.numbers.push(this.lastRand.toString());
      this.rand = this.lastRand    
    }else
      this.startSort();
    
  }

  resetSort(){
    this.numbers = []
    this.low = null
    this.high = null
    this.lastRand = null
    this.rand = null
  }

}
