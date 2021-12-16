import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/auth.guard';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AdminModule } from '../admin/admin.module';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
