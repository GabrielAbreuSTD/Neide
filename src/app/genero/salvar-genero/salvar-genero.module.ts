import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarGeneroPage } from './salvar-genero.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarGeneroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarGeneroPage]
})
export class SalvarGeneroPageModule {}
