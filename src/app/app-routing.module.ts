import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./bh-pages/home/home.module')
        .then((module) => module.HomeModule) 
  },
  {
    path: 'services',
    loadChildren: () => import('./bh-pages/services/services.module')
        .then((module) => module.ServicesModule) 
  },
  {
    path: 'team',
    loadChildren: () => import('./bh-pages/team/team.module')
        .then((module) => module.TeamModule) 
  },
  {
    path: 'contact',
    loadChildren: () => import('./bh-pages/contact/contact.module')
        .then((module) => module.ContactModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
