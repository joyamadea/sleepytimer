import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';


@Component({
  selector: 'app-name-settings',
  templateUrl: './name-settings.page.html',
  styleUrls: ['./name-settings.page.scss'],
})
export class NameSettingsPage implements OnInit {
  name = "";
  backButton: any;
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
    this.init();
  }

  ionViewWillLeave(){
    this.backButton.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  saveName(){
    this.cache.setName(this.name).then(res => {
      console.log("Changed name to "+res);
    });
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
