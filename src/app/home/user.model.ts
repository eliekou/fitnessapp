export interface user{
  id?:string;
  name?:string;
  followers?:string;
  followed?:string;
  nbtrainings?:string;
  points?:string;
  ranking?:string;
  tracker?:tracker;
}

export interface tracker{
  benchPress:string;
  inclinePress:string;
  deadlift:string;
  squat:string;
}
