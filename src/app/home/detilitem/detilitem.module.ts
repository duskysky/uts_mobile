import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetilitemPageRoutingModule } from './detilitem-routing.module';

import { DetilitemPage } from './detilitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetilitemPageRoutingModule
  ],
  declarations: [DetilitemPage]
})
export class DetilitemPageModule {}
