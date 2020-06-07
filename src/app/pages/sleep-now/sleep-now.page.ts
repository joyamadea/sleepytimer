import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import * as moment from 'moment';

@Component({
  selector: 'app-sleep-now',
  templateUrl: './sleep-now.page.html',
  styleUrls: ['./sleep-now.page.scss'],
})
export class SleepNowPage implements OnInit {
  backButton: any;
  timeys = [];
  currTime: any;
  mode: any;
  
  constructor(
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
    this.currTime = moment().add(14,'minutes');
    for (let i=0;i<6;i++){
      let next = moment(this.currTime).add(1,'hours').add(30,'minutes');
      this.timeys.push(moment(next).format('h:mm A'));
      this.currTime = next;
    }

  }

  checkMode(){
    this.cache.getMode().then(res => {
      this.mode = res;
    }); 
    console.log(this.mode);
  }

  reset(){
    this.timeys=[];
  }
  doRefreshActive(event) {
    setTimeout(() => {
      this.reset();
      this.calculateTime();
    console.log(this.timeys);
      event.target.complete();
    }, 1500);
  }

}
