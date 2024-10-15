import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingMenuComponent } from './training-menu/training-menu.component';
import { TrainingComponent } from './training/training.component';
//import { MenuComponent } from './menu/menu.component';
//import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', component: TrainingMenuComponent },
  {path:':id', component:TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
