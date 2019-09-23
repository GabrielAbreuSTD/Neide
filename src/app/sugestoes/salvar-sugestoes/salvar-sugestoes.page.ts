import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Sugestoes } from '../entidade/sugestoes';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-salvar-sugestoes',
  templateUrl: './salvar-sugestoes.page.html',
  styleUrls: ['./salvar-sugestoes.page.scss'],
})
export class SalvarSugestoesPage implements OnInit {

  sugestoes: Sugestoes = new Sugestoes();

  constructor(private fire: AngularFireDatabase,
    private rota: Router,
    private modalController: ModalController,
  ) { }

  ngOnInit() { }

  salvar() {
    if (this.sugestoes.key == null) {
      this.fire.list('sugestoes').push(this.sugestoes);
      this.sugestoes = new Sugestoes();
      this.rota.navigate(['sugestoes-listar']);
    } else {
      this.fire.object('sugestoes/' + this.sugestoes.key).update(this.sugestoes);
      this.modalController.dismiss();
    }

  }

}
