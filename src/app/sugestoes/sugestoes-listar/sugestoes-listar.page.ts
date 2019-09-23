import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sugestoes } from '../entidade/sugestoes';
import { AngularFireDatabase } from '@angular/fire/database'
import { ModalController } from '@ionic/angular';
import { SalvarSugestoesPage } from '../salvar-sugestoes/salvar-sugestoes.page';

@Component({
  selector: 'app-sugestoes-listar',
  templateUrl: './sugestoes-listar.page.html',
  styleUrls: ['./sugestoes-listar.page.scss'],
})
export class SugestoesListarPage implements OnInit {

  listaSugestoes: Observable<Sugestoes[]>;
  constructor(private fire: AngularFireDatabase, private modal: ModalController) {

    this.listaSugestoes = this.fire.list<Sugestoes>('sugestoes').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
  }

  ngOnInit() { }

  excluir(key) {
    this.fire.list<Sugestoes>('sugestoes').remove(key);

  }

  async alterar(sugestoes) {
    const tela = await this.modal.create({
      component: SalvarSugestoesPage, componentProps: { sugestoes: sugestoes }

    });
    tela.present();
  }

}
