import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CacheService } from '../app/services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cache: CacheService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    this.setMode();
    this.setName();
  }

  setMode(){
    this.cache.getMode().then(res => {
      if(res === null || res === undefined){
        this.cache.setMode(false);
      }
      else{
        document.body.classList.toggle("dark",res);
      }
    });
  }

  setName(){
    this.cache.getName().then(res => {
      if(res === null || res === undefined){
        this.cache.setName("User");
      }
    });
  }

}
