import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Genero } from '../../genero/entidade/genero';
import { Musica } from '../entidade/musica';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  //vincula aos campos do formulário
  musica: Musica = new Musica();

  //lista de genero para inserir no combobox
  listaGenero : Observable<Genero[]>

  constructor(private fire: AngularFireDatabase, private rota: Router) {

   this.listaGenero = this.fire.list<Genero>('genero').snapshotChanges().pipe(
     map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
   );

  }

  ngOnInit() {}

  salvar(){
this.fire.list('musica').push(this.musica);
this.musica = new Musica();
this.rota.navigate(['musica-listar']);
}

}
