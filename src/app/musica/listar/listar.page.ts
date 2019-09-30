import { Component, OnInit } from '@angular/core';
import { Musica } from '../entidade/musica';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

listaMusica: Observable<Musica[]>;

  constructor(private fire: AngularFireDatabase) {

     this.listaMusica = this.fire.list<Musica>('musica').snapshotChanges().pipe(
     map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
   );
 }



  ngOnInit() {}

excluir(key){
this.fire.list<Musica>('musica').remove(key);
}

}
