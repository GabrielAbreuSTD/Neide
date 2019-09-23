import { Component, OnInit } from '@angular/core';
import { Musica } from '../entidade/musica';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private fire: AngularFireDatabase) { }

  ngOnInit() {}

excluir(key){
this.fire.list<Musica>('musica').remove(key);
}

}
