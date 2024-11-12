import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingMenuComponent } from './training-menu/training-menu.component';
import { TrainRoutingModule } from './train-routing.module';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ExerciceDialogComponent } from './dialogs/exercice-dialog.component';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { TrainingDialogComponent } from './dialogs/training-dialog.component';
import { CdTimerModule } from 'angular-cd-timer';
@NgModule({
  declarations: [
    TrainingMenuComponent,
    TrainingComponent,
    TrainingHomeComponent,
    BoardDialogComponent,
    ExerciceDialogComponent,
    TrainingDialogComponent
  ],
  imports: [
    CommonModule,
    TrainRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    CdTimerModule

  ],

})
export class TrainModule { }
