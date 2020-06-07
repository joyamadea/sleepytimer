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
  darkMode = false;
  backButton: any;
  darkModeText: any = 'Off';

  constructor(
    private cacheService: CacheService,
    private platform: Platform,
    private router: Router,
  ) { 
   
  }

  ngOnInit() {}
  
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
    console.log("Clicked");
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark",this.darkMode);

    

    this.cacheService.setMode(this.darkMode).then(res =>{
      console.log("Data is saved with value ",this.darkMode);
    }).catch(e=>{
      console.log(e);
    });
    if (this.darkModeText === 'On') {
      this.darkModeText = 'Off';
    }
    else if (this.darkModeText === 'Off') {
      this.darkModeText = 'On';
    }
  }



  dark(){
    console.log("First loaded the page");
    this.cacheService.getMode().then(res=>{
      console.log("Dark Mode is "+res);
      this.darkMode = res;
      document.body.classList.toggle("dark",this.darkMode);
      if (!this.darkMode){
        this.darkModeText = 'Off';
      }
      else {
        this.darkModeText = 'On';
      }
    }).catch(e=>{
      console.log(e);
    });

    
    
  }

  changeName(){
    this.router.navigate(['/settings/change-name']);
  }

}
