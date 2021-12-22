import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelpComponent } from './help/help.component';

const routes: Route[] = [
  {
    path: '',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
