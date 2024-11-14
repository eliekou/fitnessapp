import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs';
import { user } from'./../home/user.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  newId: number;
  user: user;

  constructor(private afAuth: AngularFireAuth, private db:AngularFirestore){

  }

  ngOninit(){
    this.user = this.getUserInfos()[0];
    console.log(this.user)

  }


  getUserInfos(){
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          console.log(this.db.collection<user>('user', ref =>
            ref.where('uid', '==', user.uid)).valueChanges({ idField: 'id' }));
          return this.db.collection<user>('user', ref =>
            ref.where('uid', '==', user.uid)).;
        }
        else{
          return[];
        }
      })
    )
  }

  getUserPerformances(userDocId, uid){
    return this.db.collection('user')
      .doc(userDocId)
      .collection('performances', ref =>
        ref.where('uid', '==', uid)).valueChanges();

  }


}
