import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs';
import { user } from'./../home/user.model';
import { Performance } from "./performance.model";
import firebase from 'firebase/compat/app';

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
          return this.db.collection<user>('user', ref =>
            ref.where('uid', '==', user.uid)).valueChanges({ idField: 'id' });
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

  updatePerformancesForUser(userDocId, perfId, perfs: Performance[]){
    //perfId est egal a l'uid sur le document
    console.log("UPDATE CALLED");

    return this.db.collection('user')
      .doc(userDocId)
      .collection('performances')
      .doc(perfId)
      .update({perfs});
  }

  deletePerformanceOfUser(userDocId, perfId, perf: Performance){
    console.log("Delete Called");

    return this.db.collection('user')
                  .doc(userDocId)
                  .collection('performances')
                  .doc(perfId)
                  .update({
                    perfs:firebase.firestore.FieldValue.arrayRemove(perf)
                  });
  }




}
