import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-power-nap',
  templateUrl: './power-nap.page.html',
  styleUrls: ['./power-nap.page.scss'],
})
export class PowerNapPage implements OnInit {
  backButton:any;
  timeys=[];
  currTime:any;

  constructor(
    private platform: Platform,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.backButton = this.platform.backButton.subscribeWithPriority(1, () => {
      this.goBack();
    });
    this.calculateTime();
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
    let next = moment(this.currTime).add(1,'hours').add(30,'minutes');
    this.timeys.push(moment(next).format('h:mm A'));
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
