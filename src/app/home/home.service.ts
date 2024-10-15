import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs';
import { user } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private afAuth:AngularFireAuth,private db:AngularFirestore) {

  }


  async getUser(){
    const user = await this.afAuth.currentUser;
    return user;
  }


  getUserInfo(){
    console.log("InNgOnInit");
    console.log("User connected",this.afAuth.authState)
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          console.log("user.uid",user.uid);
          //IZG3vFsVUBYJC7uwnCAy9osYSSn1
          return this.db.collection<user>('user', ref =>
            ref.where('id', '==', user.uid)).valueChanges({ idField: 'id' });
        }

        else{
          console.log("User is not here");
          return [];
        }
      }))
  }
}
