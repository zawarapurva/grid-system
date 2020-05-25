import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'catalogue' , component: CatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  CatalogueComponent
 ];
