import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-usuario', loadChildren: './usuario/salvar-usuario/salvar-usuario.module#SalvarUsuarioPageModule' },
  { path: 'usuario-listar', loadChildren: './usuario/usuario-listar/usuario-listar.module#UsuarioListarPageModule' },
  { path: 'salvar-musica', loadChildren: './musica/salvar-musica/salvar-musica.module#SalvarMusicaPageModule' },
  { path: 'salvar-sugestoes', loadChildren: './sugestoes/salvar-sugestoes/salvar-sugestoes.module#SalvarSugestoesPageModule' },
  { path: 'sugestoes-listar', loadChildren: './sugestoes/sugestoes-listar/sugestoes-listar.module#SugestoesListarPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
