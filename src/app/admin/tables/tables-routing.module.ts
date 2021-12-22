import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { TablesComponent } from './tables/tables.component';

const routes: Route[] = [
  {
    path: '',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
