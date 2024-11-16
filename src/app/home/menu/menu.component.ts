import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {



  sub:Subscription;
  userM;

  constructor(private db:AngularFirestore, private afAuth:AngularFireAuth,private home:HomeService){

  }


  ngOnInit(){
    this.sub = this.home.getUserInfo().subscribe(user=>{

      this.userM=user;

});
  }

  ngOnDestroy(){
    console.log("Enter ngOnInit");
   this.sub.unsubscribe(); //When the component is destroyed we unsusbscribe from tha t description to the database item.
 }

}
