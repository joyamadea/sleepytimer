import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WakeUpService {
  timeChosen:any;
  constructor() { }

  setTime(time){
    this.timeChosen=time;
  }

  getTime(){
    return this.timeChosen;
  }
}
