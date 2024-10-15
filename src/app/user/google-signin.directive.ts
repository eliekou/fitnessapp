import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    console.log("Clicked on the signin button");
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
