import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadusuarioPageRoutingModule } from './cadusuario-routing.module';

import { CadusuarioPage } from './cadusuario.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadusuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadusuarioPage]
})
export class CadusuarioPageModule {}
