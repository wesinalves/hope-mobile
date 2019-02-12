import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Repertorio{
	id?: string;
	titulo: string;
	autor: string;
	letra: string;
	ano: string;
}

@Injectable({
  providedIn: 'root'
})

export class RepertorioService {

	private repertorioCollection: AngularFirestoreCollection<Repertorio>;
	private repertorio: Observable<Repertorio[]>;
	repertorioSelecionado: Repertorio;

	constructor(db: AngularFirestore) { 
		this.repertorioCollection = db.collection<Repertorio>('musicas');
		 
	    this.repertorio = this.repertorioCollection.snapshotChanges().pipe(
	      map(actions => {
	        return actions.map(a => {
	          const data = a.payload.doc.data();
	          const id = a.payload.doc.id;
	          return { id, ...data };
	        });
	      })
	    );
	}

	getRepertorios() {
		return this.repertorio;
	}

	getRepertorio(id) {
		return this.repertorioCollection.doc<Repertorio>(id).valueChanges();
	}

	updateRepertorio(repertorio: Repertorio, id: string) {
		return this.repertorioCollection.doc(id).update(repertorio);
	}

	addRepertorio(repertorio: Repertorio) {
		return this.repertorioCollection.add(repertorio);
	}

	removeRepertorio(id) {
		return this.repertorioCollection.doc(id).delete();
	}


}
