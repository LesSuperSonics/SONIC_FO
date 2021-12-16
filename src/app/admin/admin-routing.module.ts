import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './child-routes';
import { AdminModule } from './admin.module';
import { HomeComponent } from './dashboard/home/home.component';


const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'addcandidate',
        loadChildren: () => import('./addcandidate/addcandidate.module').then(m => m.AddCandidateModule)
      },
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
