import { Inject ,Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PerformanceService } from '../performance.service';
@Component({
  selector: 'app-perf-dialog',
  template: `
    <p>
      perf-dialog works!
    </p>

    <h1 mat-dialog-title>Exercice</h1>
    <div mat-dialog-content class="content">


      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.perf_name"
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
          placeholder="Weights"
          matInput
          [(ngModel)]="data.perf_value_kg"
        >Weights</textarea>
      </mat-form-field>

      <mat-form-field class ="third">
        <textarea
          placeholder="Date"
          matInput
          [(ngModel)]="data.perf_date"
        >Date</textarea>
      </mat-form-field>
      </div>


      <mat-button-toggle-group
        #group="matButtonToggleGroup"
        [(ngModel)]="data.sucess"
        class="third"
      >
        <mat-button-toggle class = "toggle"*ngFor="let opt of [false,true]" [value]="opt">
         {{
            opt
          }}
        </mat-button-toggle>
      </mat-button-toggle-group>
      <br>


<!--       <app-delete-button
        (delete)="handleTaskDelete()"
        *ngIf="!data.isNew"
      ></app-delete-button> -->
    </div>
    <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data">
          Ajouter la performance
        </button>
        </div>
  `,
  styles: ``
})
export class PerfDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PerfDialogComponent>,
    private perfService: PerformanceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  labelOptions = ['incline','squat','deadlift','curls']

}
