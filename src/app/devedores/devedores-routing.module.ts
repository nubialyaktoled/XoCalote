import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevedoresPage } from './devedores.page';

const routes: Routes = [
  {
    path: '',
    component: DevedoresPage
  },
  {
    path: 'cadastrodevedores',
    loadChildren: () => import('./cadastrodevedores/cadastrodevedores.module').then( m => m.CadastrodevedoresPageModule)
  },
  {
    path: 'lembretes',
    loadChildren: () => import('./lembretes/lembretes.module').then( m => m.LembretesPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then( m => m.DadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevedoresPageRoutingModule {}
