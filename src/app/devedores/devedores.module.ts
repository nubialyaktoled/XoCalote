import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevedoresPageRoutingModule } from './devedores-routing.module';

import { DevedoresPage } from './devedores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevedoresPageRoutingModule
  ],
  declarations: [DevedoresPage]
})
export class DevedoresPageModule {}
