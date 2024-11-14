import { Component } from '@angular/core';
import { PerformanceService} from './../performance.service';
import { Subscription } from 'rxjs';
import { Performance } from './../performance.model';
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
  constructor(private perfService: PerformanceService){

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
    //this.sub.unsubscribe()
    console.log(this.uid);
    console.log(this.userDocId)

    /* this.sub.unsubscribe()
    this.sub = this.perfService.getUserPerformances(this.userDocId, this.uid).subscribe(
      (result) =>
      3333333333333333333333333333{
      console.log(result)
      //this.performances = result[0]['perfs'];
      }
    ) */



  }


}
