import { Component, Input } from '@angular/core';
import { tracker, user } from '../user.model';

@Component({
  selector: 'app-pr',
  templateUrl: './pr.component.html',
  styleUrl: './pr.component.scss'
})
export class PrComponent {
     @Input() userM:user;

/*     @Input()trackerM:tracker; */


    ngOnInit(){
/*       console.log("Tracker in PR",this.userM[0].tracker)
      this.trackerM=this.userM[0].tracker;
*/
      //console.log("TrackerM",this.trackerM);
    }








}
