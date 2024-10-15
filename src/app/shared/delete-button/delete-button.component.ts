import { Component, Output, EventEmitter } from '@angular/core';
import { TrainService } from '../../train/train.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  canDelete:boolean;

  @Output() delete = new EventEmitter<boolean>();


prepareForDelete(){
  this.canDelete = true;
}

cancel(){
  this.canDelete = false;
}

deleteExercice(){
  console.log("Delete COnfirmed");
  this.delete.emit(true);
  this.canDelete = false;
}
/*   handleDelete(){
    console.log("Handle Delete");
    this.canDelete = true;

  } */
 //Quand on delete on check si on peut, puis on emet l'evenement delete()
 //puis on envoit l'evenement, quib va trigger handledelete() sur le composant sur lequel le
 //composant delete() a ete mis.
}
