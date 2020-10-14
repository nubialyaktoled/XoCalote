import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrodevedoresPage } from './cadastrodevedores.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrodevedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrodevedoresPageRoutingModule {}
