import { Time } from "@angular/common";
import { Timestamp } from "@angular/fire/firestore";

export interface Performance {

  perf_name?:'incline'|'bench'|'bicep'|'lateral_Raises'|'deadlift'|'squat';
  perf_value_kg?:number;
  perf_reps:number;
  sucess?:boolean;
  date?:Timestamp;


}

