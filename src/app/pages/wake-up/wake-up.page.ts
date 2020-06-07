import { Component, OnInit } from '@angular/core';
import { WakeUpService } from '../../services/wake-up.service';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import * as moment from 'moment';

@Component({
  selector: 'app-wake-up',
  templateUrl: './wake-up.page.html',
  styleUrls: ['./wake-up.page.scss'],
})
export class WakeUpPage implements OnInit {
  timeChosen: any;
  timeChosenFormatted: any;
  backButton:any;
  timeys=[];
  mode: any;

  constructor(
    private wakeUpService: WakeUpService,
    private platform: Platform,
    private router: Router,
    private cache: CacheService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.backButton = this.platform.backButton.subscribeWithPriority(1, () => {
      this.goBack();
    });
    this.timeChosen=this.wakeUpService.getTime();
    this.timeChosenFormatted=moment(this.timeChosen).format("h:mm A");
    this.calculateTime();
    this.checkMode();
    console.log(this.timeys);
  }

  ionViewWillLeave(){
    this.backButton.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  calculateTime(){
    let time = moment(this.timeChosen).subtract(9,'hours');
    this.timeys.push(moment(time).format('h:mm A'));
    for(let i=0;i<3;i++){
      let next = moment(time).add(1,'hours').add(30,'minutes');
      this.timeys.push(moment(next).format('h:mm A'));
      time = next;
    }
    
  }

  checkMode(){
    this.cache.getMode().then(res => {
      this.mode = res;
    }); 
    console.log(this.mode);
  }

}
