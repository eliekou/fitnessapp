import { Component } from '@angular/core';
import { PerformanceService} from './../performance.service';
@Component({
  selector: 'app-performances-list',
  templateUrl: './performances-list.component.html',
  styleUrl: './performances-list.component.scss'
})
export class PerformancesListComponent {
  performances;

  constructor(private perfService: PerformanceService){

  }

  ngOnInit(){
    this.performances = this.perfService.getUserPerformances()
    console.log(this.performances);
  }
}
