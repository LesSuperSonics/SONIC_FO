import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Route[] = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule {}
