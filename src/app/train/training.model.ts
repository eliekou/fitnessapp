export interface Training{
  id?:string;
  isPublic?:false;
  name?:string;
  time?:string;
  followers?:string;
  creatorName?:string;
  exercices?: Exercice[];
}

export interface Exercice {
  name?:'incline'|'bench'|'bicep'|'lateral_Raises'|'deadlift'|'squat';
  reps?:string;
  weight?:string;
}
