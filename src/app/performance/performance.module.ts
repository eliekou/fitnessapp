import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { CdTimerModule } from 'angular-cd-timer';
import { PerformancesListComponent } from './performances-list/performances-list.component';



@NgModule({
  declarations: [
    PerformancesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PerformanceModule { }
