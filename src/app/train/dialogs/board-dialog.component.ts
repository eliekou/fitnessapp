import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { TrainService } from '../train.service';
import { Exercice } from '../training.model';

@Component({
  selector: 'app-board-dialog',
  styleUrls: ['./board-dialog.component.scss'],
  template: `
    <h1 mat-dialog-title>Exercice</h1>
    <div mat-dialog-content class="content">

      <!-- <br /> -->
      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.name"
        class="first"
      >
        <mat-button-toggle class = "toggle"*ngFor="let opt of labelOptions" [value]="opt">
         {{
            opt
          }}
        </mat-button-toggle>
      </mat-button-toggle-group>
      <br>

      <div class ="fields">
      <mat-form-field class="second">
        <textarea
          placeholder="Reps"
          matInput
          [(ngModel)]="data.reps"
        >Reps</textarea>
      </mat-form-field>

      <mat-form-field class ="third">
        <textarea
          placeholder="Weight"
          matInput
          [(ngModel)]="data.weight"
        >Weight</textarea>
      </mat-form-field>
      </div>


<!--       <app-delete-button
        (delete)="handleTaskDelete()"
        *ngIf="!data.isNew"
      ></app-delete-button> -->
    </div>
    <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data">
          Add Task
        </button>
        </div>
  `,
  styles: ``
})
export class BoardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BoardDialogComponent>,
    private boardService: TrainService,
    @Inject(MAT_DIALOG_DATA) public data: Exercice
  ){}

  labelOptions = ['incline','squat','deadlift','curls']

  onNoClick(): void {
    console.log("ON NO CLICK");
    this.dialogRef.close(this.data);
  }
}
