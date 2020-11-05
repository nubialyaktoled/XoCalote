import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrodevedoresPageRoutingModule } from './cadastrodevedores-routing.module';

import { CadastrodevedoresPage } from './cadastrodevedores.page';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrodevedoresPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [CadastrodevedoresPage]
})
export class CadastrodevedoresPageModule {}
