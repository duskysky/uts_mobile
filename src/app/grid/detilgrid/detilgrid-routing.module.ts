import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetilgridPage } from './detilgrid.page';

const routes: Routes = [
  {
    path: '',
    component: DetilgridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetilgridPageRoutingModule {}
