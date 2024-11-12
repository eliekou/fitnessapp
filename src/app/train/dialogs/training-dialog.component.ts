import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainService } from '../train.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Training } from '../training.model';
import { TrainingComponent } from '../training/training.component';
@Component({
  selector: 'app-training-dialog',
  styleUrls: ['./board-dialog.component.scss'],
  template: `
  <div mat-dialog-content class="content">
    <div class ="fields">
      <mat-form-field class ="second">
        <textarea placeholder="Name"
        matInput
        [(ngModel)] = "data.name">
          Name
        </textarea>
      </mat-form-field>

      <mat-form-field class ="second">
          <textarea [(ngModel)] ="data.time"
            placeholder="Time"
            matInput>
                Time
          </textarea>
      </mat-form-field>

      <mat-form-field class ="second">
          <textarea [(ngModel)] = "data.isPublic"
              matInput
              placeholder="Observability">
                Observability
          </textarea>
      </mat-form-field>

      <mat-form-field class ="third">
          <textarea
            placeholder="Followers"
            matInput
            [(ngModel)]="data.followers"
          >Followers</textarea>
        </mat-form-field>

<!--         <button id="exercice-button" mat-button (click)="comp.openDialog()">

        </button> -->

    </div>
</div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data">
          Add Training
        </button>
      </div>


  `,
  styles: ``
})
export class TrainingDialogComponent {
    constructor(public dialogRef:MatDialogRef<TrainingDialogComponent>,
       private train:TrainService,
       @Inject(MAT_DIALOG_DATA) public data:Training
      )
    {
    }

    onNoClick(): void{
      this.dialogRef.close(this.data);
      console.log("Dialog closed")
    }




}
