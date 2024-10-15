import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription, switchMap } from 'rxjs';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-small-tracker',
  templateUrl: './small-tracker.component.html',
  styleUrl: './small-tracker.component.scss'
})
export class SmallTrackerComponent {

  @Input() userM:user;

  //sub:Subscription;

  constructor(private afAuth: AngularFireAuth,private db:AngularFirestore,private home:HomeService){

  }
  ngOnInit(){
    console.log("User received from Menu",this.userM)
  }

/*   ngOnInit(){
    this.sub = this.home.getUserInfo().subscribe(user=>{
        console.log("user received",user);
        this.userM=user;
    console.log("User retrieved",this.userM);
  });
  }


  ngOnDestroy(){
    console.log("Enter ngOnInit");
   this.sub.unsubscribe(); //When the component is destroyed we unsusbscribe from tha t description to the database item.
 }
 */
}
