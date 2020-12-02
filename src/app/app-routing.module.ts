import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'devedores',
    loadChildren: () => import('./devedores/devedores.module').then( m => m.DevedoresPageModule)
  },
  {
    path: 'cadusuario',
    loadChildren: () => import('./cadusuario/cadusuario.module').then( m => m.CadusuarioPageModule)
  },
  {
    path: 'cadastrodevedores',
    loadChildren: () => import('./devedores/cadastrodevedores/cadastrodevedores.module').then(m => m.CadastrodevedoresPageModule)
  },  {
    path: 'patchnotes',
    loadChildren: () => import('./patchnotes/patchnotes.module').then( m => m.PatchnotesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
