import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Agenda{
	id?: string;
	titulo: string;
	dataInicio: string;
	local: string;
	status: string;
	tipo: string;
}

@Injectable({
  providedIn: 'root'
})

export class AgendaService {

	private agendaCollection: AngularFirestoreCollection<Agenda>;
	private agenda: Observable<Agenda[]>;

	constructor(db: AngularFirestore) { 
		this.agendaCollection = db.collection<Agenda>('agenda');
		 
	    this.agenda = this.agendaCollection.snapshotChanges().pipe(
	      map(actions => {
	        return actions.map(a => {
	          const data = a.payload.doc.data();
	          const id = a.payload.doc.id;
	          return { id, ...data };
	        });
	      })
	    );
	}

	getAgendas() {
		return this.agenda;
	}

	getAgenda(id) {
		return this.agendaCollection.doc<Agenda>(id).valueChanges();
	}

	updateAgenda(agenda: Agenda, id: string) {
		return this.agendaCollection.doc(id).update(agenda);
	}

	addAgenda(agenda: Agenda) {
		return this.agendaCollection.add(agenda);
	}

	removeAgenda(id) {
		return this.agendaCollection.doc(id).delete();
	}


}
