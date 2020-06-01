import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WakeUpService } from '../../services/wake-up.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  timeChosen=moment().format();
  
  constructor(
    private router: Router,
    private wakeUpService: WakeUpService
  ) {}

  wakeUp(){
    this.wakeUpService.setTime(this.timeChosen);
    this.router.navigate(['/wake-up']);
  }
  powerNap(){
    this.router.navigate(['/power-nap']);
  }

  sleepNow(){
    this.router.navigate(['/sleep-now']);
  }

  nothingYet(){
    this.router.navigate(['/settings']);
  }

}
