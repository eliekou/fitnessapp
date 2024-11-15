import { Inject ,Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PerformanceService } from '../performance.service';
import { provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-perf-dialog',
  styleUrls: ['./perf-dialog.scss'],
  providers: [provideNativeDateAdapter()],
  template: `
    <h1 mat-dialog-title>Exercice</h1>
    <div mat-dialog-content class="content">

      <mat-form-field>
        <mat-label>Select</mat-label>
        <mat-select [(ngModel)]="data.perf_name" class="first">
          <mat-option *ngFor="let opt of labelOptions" [value]="opt"  >{{opt}}</mat-option>
        </mat-select>
      </mat-form-field>
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


      <mat-form-field class ="third">
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker">
        <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

      <div class = "perf_sucess">

        <mat-button-toggle-group
          #group="matButtonToggleGroup"
          [(ngModel)]="data.sucess"
          class="third">
          <mat-button-toggle class = "toggle"*ngFor="let opt of [false,true]" [ngClass]="{'sucess':opt, 'failure':!opt}"[value]="opt">
            {{opt}}
          </mat-button-toggle>
        </mat-button-toggle-group>
        <br>
      </div>


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

  labelOptions = ['Incline Chest','Shoulder Press','Lateral Raises','Tricep Cable','Bicep Cable','squat','deadlift','Arm curls']

}
