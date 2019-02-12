import { Component, OnInit } from '@angular/core';
import { Repertorio, RepertorioService} from '../services/repertorio.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-resp-repertorio',
  templateUrl: './resp-repertorio.page.html',
  styleUrls: ['./resp-repertorio.page.scss'],
})
export class RespRepertorioPage implements OnInit {
  
  repertorio: Repertorio;
  repertorioId: null;
  subscription: any;

  constructor(private route: ActivatedRoute, 
  	private nav: NavController, 
  	private repertorioService: RepertorioService, 
  	private loadingController: LoadingController) { }

  ngOnInit() {
  	this.repertorioId = this.route.snapshot.params['id'];
  	if(this.repertorioId){
  		this.loadRepertorio()
  	}
  }

  async loadRepertorio(){
  	const loading = await this.loadingController.create({
  		message: 'now loading...'
  	});
  	await loading.present();

  	this.subscription = this.repertorioService.getRepertorio(this.repertorioId).subscribe(res => {
  		loading.dismiss();
  		this.repertorio = res;
  	});


  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  

}
