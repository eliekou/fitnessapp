import { Time } from "@angular/common";
import { Timestamp } from "@angular/fire/firestore";

export interface Performance {

  perf_name?:String;
  perf_value_kg?:number;
  perf_reps:number;
  sucess?:boolean;
  perf_date?:Timestamp;
  perf_date2?:String;


}

