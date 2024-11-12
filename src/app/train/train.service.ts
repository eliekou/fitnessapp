import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs';
import { Exercice, Training } from './training.model';
import firebase from 'firebase/compat/app';
//import { user } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class TrainService {

  newId: number;

  constructor(private afAuth:AngularFireAuth,private db:AngularFirestore) {
    this.newId = 9;
  }

   async getUserTrainings2(){
    const user = await this.afAuth.currentUser;


    return this.db.collection<Training>('user').doc(user.uid).collection('trainings');
  }

    getUserTrainings(){
      return this.afAuth.authState.pipe(
        switchMap(user => {
          if(user) {
            console.log("We are getting the trainings");
            console.log(this.db.collection('user').doc().collection('trainings').valueChanges().pipe(

            ).subscribe((trainings) => {
              console.log('Liste des trainings:', trainings);
            }));
            return this.db.collection('user').doc('4j96oNu91MIiQOJoiex5').collection('trainings')
            .valueChanges()//transforme en Observable
          }
          else{
            return[];
          }
        })
      )
    }



    updateExercicesForTraining(trainingId,exercices:Exercice[]){
      console.log("UPDATE CALLED");
      return this.db.collection('user')

      .doc('4j96oNu91MIiQOJoiex5')
      .collection('trainings')
      .doc(trainingId)
      .update({exercices})
    }

  async createTraining2(data: Training) {
    const user = await this.afAuth.currentUser;
    console.log("User retrieved",user);

    let newId = (this.newId + 1).toString();


    return this.db.collection('user').doc('4j96oNu91MIiQOJoiex5').collection('trainings').add({

      name:data.name,
      time:data.time,
      exercices:[
        {name:"incline",
        reps:"20",
        weight:"20"}],
      route_id:newId,
      isPublic:false,
      creatorId: user?.uid,

    });
  }

    /**
   * Delete Training
   */
    deleteTraining(trainingId: string) {
      return this.db.collection('user')

      .doc('4j96oNu91MIiQOJoiex5')
      .collection('trainings')
      .doc(trainingId)
      .delete();
    }

    updateExercicesValues(){

    }

    deleteExerciceOfTraining(trainingId,exercice:Exercice){

      console.log(exercice,"deleting in firebase");
      console.log(this.db.collection('user').doc('4j96oNu91MIiQOJoiex5').collection('trainings', ref =>
        ref.where('id', '==', trainingId)
      )
      .doc("jBm2FXbZxsSLYE2CEwFi"));
      return this.db.collection('user').doc('4j96oNu91MIiQOJoiex5').collection('trainings', ref =>
        ref.where('id', '==', trainingId)
      )
      .doc("jBm2FXbZxsSLYE2CEwFi")
      .update({
        exercices:firebase.firestore.FieldValue.arrayRemove(exercice)
      });
    }





}
