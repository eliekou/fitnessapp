import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformancesListComponent } from './performances-list/performances-list.component';
//import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', component: PerformancesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
