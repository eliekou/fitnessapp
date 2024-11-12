import { Component } from '@angular/core';
import { Training } from '../training.model';
import { Subscription } from 'rxjs';
import { TrainService } from '../train.service';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TrainingDialogComponent } from '../dialogs/training-dialog.component';
@Component({
  selector: 'app-training-menu',
  templateUrl: './training-menu.component.html',
  styleUrl: './training-menu.component.scss'
})
export class TrainingMenuComponent {
  trainings: Training[];
  sub: Subscription;


  constructor(private serv:TrainService, private router:Router,private dialog:MatDialog){

  }


  ngOnInit(){
/*     this.sub = this.serv.getUserTrainings()
                .subscribe() */

/*      this.serv.getUserTrainings2().then((result)=>{
      this.trainings = result.valueChanges().}
 */

    this.sub = this.serv.getUserTrainings().subscribe((result)=>{
      console.log("Trainings received",result);
      this.trainings = result;
    })


  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  openDialog(){
    const dialogRef = this.dialog.open(TrainingDialogComponent,{
      width:'500px',
      data:{
        name:"",
        exercice:"",
        followers:"",
        isPublic:"",
        time:""
      }

    });

    dialogRef.afterClosed().subscribe(
      result=>{
        console.log(result);
        console.log("calling createTraining");
        this.serv.createTraining2(result)
      })

  }

/*   goToTraining(training:any){
    console.log("Current Route",this.router.getCurrentNavigation());
    this.router.navigate([training.id],{state:{TrainingData:training}});
  } */


}
