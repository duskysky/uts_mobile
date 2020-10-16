import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPage } from './grid.page';

const routes: Routes = [
  {
    path: '',
    component: GridPage
  },
  {
    path: ':model',
    loadChildren: () => import('./detilgrid/detilgrid.module').then( m => m.DetilgridPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridPageRoutingModule {}
