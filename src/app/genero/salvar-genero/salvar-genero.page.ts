import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from "@angular/fire/database";

import { Genero } from '../entidade/genero';

@Component({
  selector: 'app-salvar-genero',
  templateUrl: './salvar-genero.page.html',
  styleUrls: ['./salvar-genero.page.scss'],
})
export class SalvarGeneroPage implements OnInit {

  genero: Genero = new Genero();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() { }

  salvar() {
    this.banco.list('genero').push(this.genero);
    this.genero = new Genero();
    alert("genero salvo com sucesso");
  }

}
