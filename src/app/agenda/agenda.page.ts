import { Component, OnInit } from '@angular/core';
import { Agenda, AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  agendas: Agenda[]
 
  constructor(private agendaService: AgendaService) { }

  ngOnInit() {

  this.agendaService.getAgendas().subscribe(res => {
        this.getAgendasAtivas(res);
      });
  }

  remove(item) {
      this.agendaService.removeAgenda(item.id);
  }

  getAgendasAtivas(agendas){
    this.agendas = agendas.filter((a) => {
        return (a.status.toLowerCase() == 'ativo');
    })
  }

}
