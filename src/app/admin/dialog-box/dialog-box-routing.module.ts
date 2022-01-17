import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const routes: Route[] = [
  {
    path: '',
    component: DialogBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogBoxRoutingModule {}
