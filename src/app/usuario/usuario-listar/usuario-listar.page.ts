import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})
export class UsuarioListarPage implements OnInit {

  listaUsuarios: Observable<Usuario[]>;

  constructor(private fire: AngularFireDatabase) {

this.listaUsuarios = this.fire.list<Usuario>('usuario').snapshotChanges().pipe(
 map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val()})))
);


}

ngOnInit() {}

}
