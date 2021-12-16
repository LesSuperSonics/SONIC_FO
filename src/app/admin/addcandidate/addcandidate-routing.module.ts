import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AddCandidateComponent } from './addcandidate/addcandidate.component';

const routes: Route[] = [
  {
    path: '',
    component: AddCandidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCandidateRoutingModule {}
