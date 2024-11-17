import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [/* {path:'',component:HomepageComponent}, */


/*   {path:'login',component:LoginPageComponent} */
  {path: '',  loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'training',  loadChildren: () => import('./train/train.module').then(m=>m.TrainModule)},
  {path: 'performances', loadChildren: () => import('./performance/performance.module').then(m=>m.PerformanceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
