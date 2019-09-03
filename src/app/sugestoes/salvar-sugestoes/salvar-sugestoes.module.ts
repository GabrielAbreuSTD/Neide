import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarSugestoesPage } from './salvar-sugestoes.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarSugestoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarSugestoesPage]
})
export class SalvarSugestoesPageModule {}
