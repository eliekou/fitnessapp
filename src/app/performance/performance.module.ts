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
import { PerformanceRoutingModule } from './performance-routing.module'
import { PerformancesListComponent } from './performances-list/performances-list.component';
import {MatTableModule} from '@angular/material/table';
import { PerfDialogComponent } from './dialogs/perf-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PerformancesListComponent,
    PerfDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerformanceRoutingModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule

  ]
})
export class PerformanceModule { }
