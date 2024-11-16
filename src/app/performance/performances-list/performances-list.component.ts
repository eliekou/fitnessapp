import { Component } from '@angular/core';
import { PerformanceService} from './../performance.service';
import { Subscription } from 'rxjs';
import { Performance } from './../performance.model';
import { MatDialog } from '@angular/material/dialog';
import { PerfDialogComponent } from '../dialogs/perf-dialog.component';
import { performance } from 'perf_hooks';
@Component({
  selector: 'app-performances-list',
  templateUrl: './performances-list.component.html',
  styleUrl: './performances-list.component.scss'
})
export class PerformancesListComponent {

  performances: Performance[];

  filteredPerformances: Performance[];

  userDocId;

  uid;

  sub: Subscription;

  filterName: String = "";

  displayedColumns: string[] = ['demo-perf_name', 'demo-perf_value', 'demo-perf_reps', 'demo-perf_date', 'demo-perf_actions'];

  labelOptions = ['Bench Press','Incline Chest','Shoulder Press','Lateral Raises','Tricep Cable','Bicep Cable','Squat','Deadlift','Arm curls']

  constructor(private perfService: PerformanceService, private dialog: MatDialog){

  }

  ngOnInit(){

    this.sub = this.perfService.getUserInfos().subscribe(
      (result)=>{
        console.log(result);
        this.userDocId = result[0].id;
        this.uid = result[0].uid;

        this.getPerformances(this.filterName);

      }
    )
  }

  convertTimeStamp(){
    for ( let i = 0; i < this.performances.length; i ++){
      console.log(i,"converted")
      this.performances[i].perf_date2 = this.performances[i].perf_date.toDate().toLocaleDateString('fr-FR', {
        weekday: 'long', // affiche le jour de la semaine (ex. : jeudi)
        year: 'numeric',
        month: 'long', // affiche le mois complet (ex. : novembre)
        day: 'numeric'
      });;
    }
  }

  getPerformances(filterName?){
    this.perfService.getUserPerformances(this.userDocId,this.uid).subscribe(
      (result) => {
      console.log(result)

      this.performances = result[0]['perfs'];



      this.filteredPerformances = [...this.performances];

      if (filterName){
        this.filterExerciceByName(filterName)
      }
      this.convertTimeStamp();

      console.log(this.performances)
      });
  }
  openDialog(){
    const dialogRef = this.dialog.open(PerfDialogComponent,
      {
        width:'500px',
        data:{
            perf_name:"",
            perf_value_kg:"",
            perf_reps:"",
            perf_date:"",
            perf_sucess:"",
            perf_date2:"",
        }
      })

      dialogRef.afterClosed().subscribe(
        (result) => {
          console.log("result dialog", result);

          if (result){
            this.perfService.updatePerformancesForUser(this.userDocId, this.uid,
              [
              ...this.performances,
              result]);
          }
        }
      )
  }

  handleDelete(perf: Performance){
    return this.perfService.deletePerformanceOfUser(this.userDocId, this.uid, perf);
  }

  filterExerciceByName(name: String){
      if (name) {
        this.filteredPerformances = this.performances.filter(
          (perf) => perf.perf_name.toLowerCase() === name.toLowerCase() || perf.perf_name.toLowerCase() === name
        );
      } else {
        // If no filter is applied, show all performances.
        this.filteredPerformances = [...this.performances];
      }
      console.log("Filtered Performances", this.filteredPerformances);
  }

}
