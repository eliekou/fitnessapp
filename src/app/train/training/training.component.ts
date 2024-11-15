import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Exercice, Training } from '../training.model';
import { Subscription } from 'rxjs';
import { TrainService } from '../train.service';
import { MatDialog } from '@angular/material/dialog';
import { BoardDialogComponent } from '../dialogs/board-dialog.component';
import { ExerciceDialogComponent } from '../dialogs/exercice-dialog.component';
import { CompletionDialogComponent } from '../dialogs/completion-dialog.component';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  @ViewChild('myTimer', { static: false }) myTimer;
  //@Input() training;

  training:Training;
  id:any;
  sub:Subscription;

  isChecked:boolean[];
  isStarted: boolean[];

  constructor(private route: ActivatedRoute, private db:AngularFirestore, private serv:TrainService,private dialog:MatDialog){

  }
  isStart(i){
    this.myTimer.start();
    this.isStarted[i] = true;
    console.log("isStrat caleld");
  }
  ngOnInit(){
    this.id =  this.route.snapshot.paramMap.get('id');
    console.log("Id retrieved",this.id);
    this.sub = this.db.collection('user').doc('4j96oNu91MIiQOJoiex5').collection('trainings', ref =>
              ref.where('route_id', '==', this.id)
            ).valueChanges({idField:'id'})
          .subscribe((result)=>{
          //console.log("RESULT",result);
          console.log("TRAINING RESULT",result)



          this.training = result[0];
          this.isChecked = new Array(this.training.exercices.length).fill(false);

          console.log("Checked",this.isChecked);
          this.isStarted = Array(this.training.exercices.length).fill(false);
          console.log("Started",this.isStarted);
        }
        )
  }
  ngOnDestroy(){
    console.log("COMPONENT DESTROYED")
    this.sub.unsubscribe();
  }

/*   checkAction(){
    console.log("Exercice is complete");
  } */

  openDialog(exercice?):void{
    const dialogRef = this.dialog.open(BoardDialogComponent,{
      width:'500px',
      data:exercice?{
          name:"",
          reps:"",
          weight:""
        }:{
          name:"",
          reps:"",
          weight:""
        }
  });



  dialogRef.afterClosed().subscribe(result =>{

      console.log(result);
        console.log("Dialog closed to add an exercice",this.id);
        if(result){
          console.log("Dialog closed 2");
          this.serv.updateExercicesForTraining(this.training.id,
            [
            ...this.training.exercices,
            result
          ]);//ne fonctionne pas quand on cree une nouvelle tache dans un board vide.
        }
  })
  }

  openDialogExercice(exercice:Exercice,idx:number){
    const dialogRef = this.dialog.open(ExerciceDialogComponent,{
      width:'400px',
      data:{exercice:{...exercice},idx}//...exercice instead of exercice to correct bug?
    }
    );


    dialogRef.afterClosed().subscribe(result =>{

      console.log(result);
        console.log("Dialog closed");
        if(result/* .isNew */){
          console.log("Dialog closed 2");
          console.log("We want to update the exercice",result.idx);
          const update = this.training.exercices;
          console.log("before update",update);
          console.log(result.exercice);
          update.splice(result.idx,1,result.exercice);
          console.log("after update",update)
          this.serv.updateExercicesForTraining(this.id,
            this.training.exercices

          );//ne fonctionne pas quand on cree une nouvelle tache dans un board vide.
        }/* else{
          const update = this.training.exercices;
          update.splice(result);
          this.serv.updateExercicesForTraining(this.id, this.training.exercices);
        } */
  /*   } */
  })
  }

  get allChecked(): boolean{
/*     if (this.isChecked.every(value => value === true)== true){
      console.log("Exercice finished");
      const dialogRef = this.dialog.open(CompletionDialogComponent);
    } */
    //const dialogRef = this.dialog.open(CompletionDialogComponent);
    return (this.isChecked.every(value => value === true)== true);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isChecked']) {
      // Code exécuté lorsque la propriété someProp change, équivalent à useEffect(() => { ... }, [someProp])
      console.log('someProp a changé:');
      this.allChecked;
    }
  }
  handleDeleteTraining(){
    this.serv.deleteTraining(this.training.id);
  }

  handleDelete(exercice){
    console.log("We are deleting");
    this.serv.deleteExerciceOfTraining(this.training.id,exercice)
  }

}
