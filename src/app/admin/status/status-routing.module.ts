import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { StatusComponent } from './status/status.component';

const routes: Route[] = [
  {
    path: '',
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
