import { Component } from '@angular/core';
import { PerformanceService} from './../performance.service';
import { Subscription } from 'rxjs';
import { Performance } from './../performance.model';
import { MatDialog } from '@angular/material/dialog';
import { PerfDialogComponent } from '../dialogs/perf-dialog.component';
@Component({
  selector: 'app-performances-list',
  templateUrl: './performances-list.component.html',
  styleUrl: './performances-list.component.scss'
})
export class PerformancesListComponent {

  performances: Performance[];

  userDocId;

  uid;

  sub: Subscription;

  displayedColumns: string[] = ['demo-perf_name', 'demo-perf_value', 'demo-perf_date'];
  constructor(private perfService: PerformanceService, private dialog: MatDialog){

  }

  ngOnInit(){

    this.sub = this.perfService.getUserInfos().subscribe(
      (result)=>{
        console.log(result);
        this.userDocId = result[0].id;
        this.uid = result[0].uid;
        this.perfService.getUserPerformances(this.userDocId,this.uid).subscribe(
          (result) => {
          console.log(result)

          this.performances = result[0]['perfs'];

          console.log(this.performances)
          });

      }
    )
  }

  openDialog(){
    const dialogRef = this.dialog.open(PerfDialogComponent,
      {
        width:'500px',
        data:{
            perf_name:"",
            perf_value_kg:"",
            perf_date:"",
            perf_sucess:""
        }
      })


      dialogRef.afterClosed().subscribe(
        (result) => {
          if (result){
            this.perfService.updatePerformancesForUser(this.userDocId, this.uid, result);
          }
        }
      )
  }

}
