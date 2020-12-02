import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { PatchnotesPageRoutingModule } from './patchnotes-routing.module';

import { PatchnotesPage } from './patchnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PatchnotesPageRoutingModule
  ],
  declarations: [PatchnotesPage]
})
export class PatchnotesPageModule {}