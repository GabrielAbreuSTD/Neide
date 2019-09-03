import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Sugestoes } from '../entidade/sugestoes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salvar-sugestoes',
  templateUrl: './salvar-sugestoes.page.html',
  styleUrls: ['./salvar-sugestoes.page.scss'],
})
export class SalvarSugestoesPage implements OnInit {

  sugestoes: Sugestoes = new Sugestoes();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() { }

  salvar (){
    this.banco.list('sugestoes').push(this.sugestoes);
    this.sugestoes = new Sugestoes();
    this.rota.navigate(['sugestoes-listar']);


}

}
