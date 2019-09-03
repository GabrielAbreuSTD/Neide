import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sugestoes } from '../entidade/sugestoes';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-sugestoes-listar',
  templateUrl: './sugestoes-listar.page.html',
  styleUrls: ['./sugestoes-listar.page.scss'],
})
export class SugestoesListarPage implements OnInit {

  listaSugestoes: Observable<Sugestoes[]>;
  constructor(private fire: AngularFireDatabase) {

    this.listaSugestoes = this.fire.list<Sugestoes>('sugestoes').snapshotChanges().pipe(
    map( lista => lista.map( linha => ({ key: linha.payload.key, ... linha.payload.val() }) ) )

    );
   }

  ngOnInit() {
  }

}
