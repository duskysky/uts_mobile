import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetilitemPage } from './detilitem.page';

const routes: Routes = [
  {
    path: '',
    component: DetilitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetilitemPageRoutingModule {}
