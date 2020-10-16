import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetilgridPageRoutingModule } from './detilgrid-routing.module';

import { DetilgridPage } from './detilgrid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetilgridPageRoutingModule
  ],
  declarations: [DetilgridPage]
})
export class DetilgridPageModule {}
