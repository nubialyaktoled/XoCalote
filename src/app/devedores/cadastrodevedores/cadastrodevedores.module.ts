import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrodevedoresPageRoutingModule } from './cadastrodevedores-routing.module';

import { CadastrodevedoresPage } from './cadastrodevedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrodevedoresPageRoutingModule
  ],
  declarations: [CadastrodevedoresPage]
})
export class CadastrodevedoresPageModule {}
