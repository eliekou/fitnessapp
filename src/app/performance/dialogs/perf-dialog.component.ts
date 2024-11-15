import { Inject ,Component, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PerformanceService } from '../performance.service';
import { provideNativeDateAdapter} from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perf-dialog',
  styleUrls: ['./perf-dialog.scss'],
  providers: [provideNativeDateAdapter()],
  template: `
    <h1 mat-dialog-title>My performance</h1>
    <div mat-dialog-content class="content">

      <mat-form-field>
        <mat-label>Exercice to select</mat-label>
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

        @if (data.perf_value_kg.invalid) {
      <mat-error>{{errorMessage()}}</mat-error>
    }
      </mat-form-field>

      <mat-form-field floatLabel="always">
        <mat-label>Reps</mat-label>
        <input matInput type="number"  [(ngModel)]="data.perf_reps" class="example-right-align" placeholder="0" />
        <!-- <span matTextPrefix>$&nbsp;</span>
        <span matTextSuffix>.00</span> -->
      </mat-form-field>


      <mat-form-field class ="third">
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" [(ngModel)]="data.perf_date">
        <mat-hint>MM/DD/YYYY</mat-hint>
          <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>

      <div class = "perf_sucess">

      <h4> Sucess ?</h4>

        <mat-button-toggle-group
          #group="matButtonToggleGroup"
          [(ngModel)]="data.perf_sucess"
          class="third">
          <mat-button-toggle class = "toggle"*ngFor="let opt of [false,true]" [ngClass]="{'sucess':opt, 'failure':!opt}"[value]="opt">
            {{opt}}
          </mat-button-toggle>

        </mat-button-toggle-group>
        <br>

      </div>


    </div>
    <div mat-dialog-actions class ="final">
        <button mat-button [mat-dialog-close]="data">
          Add performance !
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

  labelOptions = ['Bench Press','Incline Chest','Shoulder Press','Lateral Raises','Tricep Cable','Bicep Cable','Squat','Deadlift','Arm curls']
  readonly perf_value_kg = new FormControl('', [Validators.required]);
  errorMessage = signal('');

}
