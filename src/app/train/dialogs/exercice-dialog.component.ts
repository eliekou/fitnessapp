import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { TrainService } from '../train.service';
import { Exercice } from '../training.model';

@Component({
  selector: 'app-exercice-dialog',
  styleUrls: ['./board-dialog.component.scss'],
  template: `
    <h1 mat-dialog-title>Exercice</h1>
    <div mat-dialog-content class="content">

      <!-- <br /> -->
      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.exercice.name"
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
          [(ngModel)]="data.exercice.reps"
        >Reps</textarea>
      </mat-form-field>

      <mat-form-field class ="third">
        <textarea
          placeholder="Weight"
          matInput
          [(ngModel)]="data.exercice.weight"
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
          Modify Exercice
        </button>
        </div>
  `,
  styles: ``
})
export class ExerciceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExerciceDialogComponent>,
    private boardService: TrainService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  labelOptions = ['incline','squat','deadlift','curls']

  onNoClick(): void {
    console.log("ON NO CLICK");
    this.dialogRef.close(this.data);
  }
}
