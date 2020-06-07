import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WakeUpService } from '../../services/wake-up.service';
import * as moment from 'moment';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  timeChosen = moment().format();
  name = "";
  constructor(
    private router: Router,
    private wakeUpService: WakeUpService,
    private cache: CacheService
  ) {}

  ngOnInit(){}

  ionViewWillEnter() {
   
    this.init();
  }

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

  settings(){
    this.router.navigate(['/settings']);
  }

  init(){
    this.cache.getName().then(res=>{
      this.name = res;
    }).catch(e=>{
      console.log(e);
    });
  }

}
