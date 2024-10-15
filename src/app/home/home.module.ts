import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeRoutingModule } from './home-routing';
import { SmallTrackerComponent } from './small-tracker/small-tracker.component';
import { TrainingCalendarComponent } from './training-calendar/training-calendar.component';
import { SharedModule } from '../shared/shared.module';
import { PrComponent } from './pr/pr.component';



@NgModule({
  declarations: [
    MenuComponent,
    SmallTrackerComponent,
    TrainingCalendarComponent,
    PrComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
