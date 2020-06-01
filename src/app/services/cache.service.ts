import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(
    private storage: Storage
  ) { }

  setMode(mode: boolean){
    return this.storage.set('mode',mode);
  }

  getMode(){
    return this.storage.get('mode');
  }

  setName(name: string){
    return this.storage.set('name',name);
  }

  getName(){
    return this.storage.get('name');
  }
}
