import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    //private snack: SnackService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.currentUser;
    console.log("authGuard",user)
    const isLoggedIn = !!user;//Converts to boolean
    if (!isLoggedIn) {
      //this.snack.authError();
      console.log("not logged in");
    }
    return isLoggedIn;
  }
}
