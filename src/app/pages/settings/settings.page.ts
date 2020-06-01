import { Component, OnInit } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CacheService } from '../../services/cache.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode=false;
  backButton: any;
  darkModeText:any="Off";

  constructor(
    private cacheService: CacheService,
    private platform: Platform,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.backButton = this.platform.backButton.subscribeWithPriority(1, () => {
      this.goBack();
    });
    this.dark();
  }

  ionViewWillLeave(){
    this.backButton.unsubscribe();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  notify() {
    if(this.darkMode == false){
      this.darkMode = true;
    }
    else if(this.darkMode == true){
      this.darkMode = false;
    }
    this.cacheService.setMode(this.darkMode);
    if(this.darkModeText == "On"){
      this.darkModeText = "Off";
    }
    else if(this.darkModeText == "Off"){
      this.darkModeText = "On";
    }
  }

  async dark(){
    this.darkMode = await this.cacheService.getMode();
    if(!this.darkMode){
      this.darkModeText = "Off";
    }
    else{
      this.darkModeText = "On";
    }
  }

}
