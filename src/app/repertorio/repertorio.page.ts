import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Repertorio, RepertorioService } from '../services/repertorio.service';

@Component({
  selector: 'app-repertorio',
  templateUrl: './repertorio.page.html',
  styleUrls: ['./repertorio.page.scss'],
})
export class RepertorioPage implements OnInit {

  filteredRepertorios: Repertorio[];
  repertorios: Repertorio[];
  alfabeto: string[];
  

  constructor(private repertorioService: RepertorioService, private router: Router) { }

  ngOnInit() {
  	
    this.repertorioService.getRepertorios().subscribe(res => {
        this.repertorios = _.clone(res);
        this.alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','z'];
        /*this.filteredRepertorios = res;*/
      });

  }

  getRepertorio(repertorio){
    this.router.navigate(['/tabs/resp-repertorio', repertorio.id])

  }

  getFilteredRepertorio(ev: any){

    let serVal = ev.target.value;
    if(serVal && serVal.trim() != ''){
      this.filteredRepertorios = this.repertorios.sort().filter((a) => {
        return (a.titulo.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      }).sort()
    }
  }

  getCleared(){
    this.filteredRepertorios = null
  }

}
