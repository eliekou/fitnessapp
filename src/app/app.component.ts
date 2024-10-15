import { Component,inject } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitnessapp';
  firestore: AngularFirestore = inject(AngularFirestore);

  constructor(){}
}

